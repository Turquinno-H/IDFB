const COMPETITIONS = [
  { code: 'PL',  name: 'Premier Lig' },
  { code: 'SA',  name: 'Serie A'     },
  { code: 'PD',  name: 'La Liga'     },
  { code: 'BL1', name: 'Bundesliga'  },
  { code: 'FL1', name: 'Ligue 1'     },
  { code: 'SL1', name: 'Süper Lig'   },
];

export const handler = async (event) => {
  const API_KEY = process.env.FOOTBALL_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'API key not configured' }),
    };
  }

  const code = (event.queryStringParameters?.competition || 'PL').toUpperCase();
  const comp = COMPETITIONS.find(c => c.code === code) || { code, name: code };

  try {
    const res = await fetch(
      `https://api.football-data.org/v4/competitions/${comp.code}/teams`,
      { headers: { 'X-Auth-Token': API_KEY } }
    );

    if (!res.ok) {
      const text = await res.text();
      return {
        statusCode: res.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: `football-data.org: ${res.status}`, detail: text }),
      };
    }

    const data = await res.json();

    const players = [];
    for (const team of (data.teams || [])) {
      for (const p of (team.squad || [])) {
        if (!p.name) continue;
        const dob = p.dateOfBirth;
        const age = dob
          ? Math.floor((Date.now() - new Date(dob)) / (365.25 * 864e5))
          : null;
        players.push({
          id:          p.id,
          name:        p.name,
          position:    p.position || null,
          nationality: p.nationality || null,
          dateOfBirth: dob || null,
          age,
          team:        team.name,
          teamShort:   team.shortName || team.tla || team.name,
          teamCrest:   team.crest || null,
          league:      comp.name,
        });
      }
    }

    players.sort((a, b) => a.name.localeCompare(b.name));

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800',
      },
      body: JSON.stringify({
        competition: data.competition?.name || comp.name,
        season:      data.season?.startDate?.slice(0, 4) || null,
        total:       players.length,
        players,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};