import { schedule } from '@netlify/functions';
import pg from 'pg';

const { Client } = pg;

const API_BASE = 'https://v3.football.api-sports.io';

// Türkiye 08:00 = UTC 05:00
const CRON = '0 5 * * *';

// Takip edilecek ligler (API-Football league ID'leri)
const LEAGUES = [
  { id: 39,  name: 'Premier Lig',  season: null },
  { id: 140, name: 'La Liga',      season: null },
  { id: 135, name: 'Serie A',      season: null },
  { id: 78,  name: 'Bundesliga',   season: null },
  { id: 61,  name: 'Ligue 1',      season: null },
  { id: 203, name: 'Süper Lig',    season: null },
];

function currentSeason() {
  const now = new Date();
  return now.getMonth() < 7 ? now.getFullYear() - 1 : now.getFullYear();
}

function searchKey(name) {
  return name.toLowerCase().trim().replace(/\s+/g, '_');
}

function mapPlayer(raw) {
  const p  = raw.player;
  const st = raw.statistics?.[0] ?? {};
  return {
    id:          p.id,
    name:        p.name,
    firstname:   p.firstname,
    lastname:    p.lastname,
    age:         p.age,
    nationality: p.nationality,
    height:      p.height,
    weight:      p.weight,
    photo:       p.photo,
    injured:     p.injured ?? false,
    position:    st.games?.position   ?? null,
    team:        st.team?.name        ?? null,
    teamLogo:    st.team?.logo        ?? null,
    league:      st.league?.name      ?? null,
    season:      st.league?.season    ?? null,
    stats: {
      appearances:   st.games?.appearences  ?? 0,
      goals:         st.goals?.total        ?? 0,
      assists:       st.goals?.assists       ?? 0,
      rating:        st.games?.rating ? parseFloat(st.games.rating).toFixed(1) : null,
      minutesPlayed: st.games?.minutes      ?? 0,
      yellowCards:   st.cards?.yellow       ?? 0,
      redCards:      st.cards?.red          ?? 0,
      passes:        st.passes?.total       ?? 0,
      passAccuracy:  st.passes?.accuracy    ?? null,
      tackles:       st.tackles?.total      ?? 0,
      dribbles:      st.dribbles?.success   ?? 0,
      shots:         st.shots?.total        ?? 0,
      shotsOnTarget: st.shots?.on           ?? 0,
    },
  };
}

async function fetchTopScorers(leagueId, season, apiKey) {
  const res = await fetch(
    `${API_BASE}/players/topscorers?league=${leagueId}&season=${season}`,
    { headers: { 'x-apisports-key': apiKey } }
  );
  if (!res.ok) throw new Error(`API-Football ${res.status} (league ${leagueId})`);
  const json = await res.json();
  return json.response ?? [];
}

async function upsertPlayers(client, players) {
  for (const raw of players) {
    const data = mapPlayer(raw);
    const key  = searchKey(data.name);
    await client.query(
      `INSERT INTO player_cache (search_key, player_name, data)
       VALUES ($1, $2, $3)
       ON CONFLICT (search_key)
       DO UPDATE SET data = EXCLUDED.data, cached_at = NOW()`,
      [key, data.name, JSON.stringify(data)]
    );
  }
}

const updateHandler = async () => {
  const API_KEY     = process.env.API_FOOTBALL_KEY;
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!API_KEY || !DATABASE_URL) {
    console.error('[dailyUpdate] Eksik env var: API_FOOTBALL_KEY veya DATABASE_URL');
    return { statusCode: 500 };
  }

  const season = currentSeason();
  const client = new pg.Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  let totalSaved = 0;

  try {
    await client.connect();

    // Tabloyu oluştur (yoksa)
    await client.query(`
      CREATE TABLE IF NOT EXISTS player_cache (
        search_key  TEXT PRIMARY KEY,
        player_name TEXT        NOT NULL,
        data        JSONB       NOT NULL,
        cached_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    for (const league of LEAGUES) {
      try {
        const players = await fetchTopScorers(league.id, season, API_KEY);
        await upsertPlayers(client, players);
        totalSaved += players.length;
        console.log(`[dailyUpdate] ${league.name}: ${players.length} oyuncu güncellendi`);

        // API rate limit: 30 istek/dakika → her istekten sonra 2sn bekle
        await new Promise(r => setTimeout(r, 2000));
      } catch (err) {
        console.error(`[dailyUpdate] ${league.name} hatası:`, err.message);
      }
    }

    console.log(`[dailyUpdate] Tamamlandı. Toplam: ${totalSaved} oyuncu`);
    return { statusCode: 200, body: `${totalSaved} oyuncu güncellendi` };

  } catch (err) {
    console.error('[dailyUpdate] Kritik hata:', err.message);
    return { statusCode: 500, body: err.message };
  } finally {
    await client.end().catch(() => {});
  }
};

export const handler = schedule(CRON, updateHandler);