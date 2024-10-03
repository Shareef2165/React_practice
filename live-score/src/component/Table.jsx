import React from "react";
import { Link } from "react-router-dom";

export default function Table({ data }) {
  return (
    <div className="table-container">
      {data?.response.map((fixture) => (
        <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
          <div className="fixture-item">
            <div className="center">
              <img src={fixture.league.logo} width={25} alt="logo" />
              {fixture.league.name}
            </div>
            <div className="status">{fixture.fixture.status.long}</div>
            <div className="team-info">
              <div className="team-name">{fixture.teams.home.name}</div>
              <div className="score">
                {fixture.goals.home} : {fixture.goals.away}
              </div>
              <div className="team-name">{fixture.teams.away.name}</div>
            </div>
            <div className="elapsed-time">{fixture.fixture.status.elapsed} minutes</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
