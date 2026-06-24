const API_KEY = '75fa0bed2edc4bb4afc4bf838a523d53';

exports.handler = async () => {
  try {
    const response = await fetch(
      'https://api.football-data.org/v4/competitions/PL/teams',
      { headers: { 'X-Auth-Token': API_KEY } }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `API ${response.status}` })
      };
    }

    const data = await response.json();

    const players = (data.teams || []).flatMap(team =>
      (team.squad || []).map(p => ({
        id: p.id,
        name: p.name,
        position: p.position,
        nationality: p.nationality,
        team: team.name,
        teamCrest: team.crest
      }))
    );

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(players)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};