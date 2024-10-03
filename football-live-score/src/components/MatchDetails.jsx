import React from 'react';

function MatchDetails({ matchDetails }) {
  if (!matchDetails) return <div>No match details available</div>;

  const {
    teams: { home, away },
    head2head,
    lineups
  } = matchDetails;

  return (
    <div>
      <h1>{home.name} vs {away.name}</h1>

      {}
      <div>
        <h2>Coach Information</h2>
        <p>Home Coach: {home.coach.name}</p>
        <p>Away Coach: {away.coach.name}</p>
      </div>

      {}
      <div>
        <h2>Team Flags</h2>
        <img src={home.logo} alt={`${home.name} flag`} style={{ width: '100px' }} />
        <img src={away.logo} alt={`${away.name} flag`} style={{ width: '100px' }} />
      </div>

      {}
      <div>
        <h2>Squads</h2>
        <div>
          <h3>{home.name} Squad</h3>
          <ul>
            {lineups?.home?.startXI?.map(player => (
              <li key={player.player.id}>
                {player.player.name} (#{player.player.number})
              </li>
            )) || <p>No squad data available</p>}
          </ul>
        </div>

        <div>
          <h3>{away.name} Squad</h3>
          <ul>
            {lineups?.away?.startXI?.map(player => (
              <li key={player.player.id}>
                {player.player.name} (#{player.player.number})
              </li>
            )) || <p>No squad data available</p>}
          </ul>
        </div>
      </div>

      {}
      <div>
        <h2>Past Winnings</h2>
        <p>{home.name} Wins: {head2head?.homeWins || 0}</p>
        <p>{away.name} Wins: {head2head?.awayWins || 0}</p>
      </div>
    </div>
  );
}

export default MatchDetails;
