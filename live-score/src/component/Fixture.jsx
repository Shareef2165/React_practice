import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFixtures } from "../lib/fetch-data";

export default function Fixture() {
  const [fixture, setFixture] = useState(null);
  const [error, setError] = useState(null);
  const { matchID } = useParams();

  const fetchInfo = async (controller) => {
    try {
      const data = await fetchFixtures({ signal: controller.signal });
      const results = data.response.filter((match) => match.fixture.id === Number(matchID));

      if (results.length > 0) {
        setFixture(results[0]);
      } else {
        setError("No matching fixture found.");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        setError("Failed to fetch fixture details.");
      }
    }
  };

  useEffect(() => {
    if (matchID) {
      const controller = new AbortController();
      fetchInfo(controller);
      return () => controller.abort();
    }
  }, [matchID]);

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>{error}</h2>
      </div>
    );
  }

  if (!fixture) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Loading fixture details...</h2>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "10px", backgroundColor: "white" }}>
      <div key={fixture.fixture.id} style={{ backgroundColor: "white", padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <img src={fixture.league.logo} width={25} alt="league logo" />
          <div>{fixture.league.name}</div>
        </div>

        <div style={{ display: "flex", padding: "10px 0", justifyContent: "space-between" }}>
          <div style={{ textAlign: "center", width: "10%" }}>
            <img src={fixture.teams.home.logo} width={30} alt="home team logo" />
          </div>

          <div style={{ width: "32%", textAlign: "right" }}>{fixture.teams.home.name}</div>

          <div style={{ width: "16%", textAlign: "center" }}>
            {fixture.goals.home !== null ? fixture.goals.home : "-"} : {fixture.goals.away !== null ? fixture.goals.away : "-"}
          </div>

          <div style={{ width: "32%", textAlign: "left" }}>{fixture.teams.away.name}</div>

          <div style={{ textAlign: "center", width: "10%" }}>
            <img src={fixture.teams.away.logo} width={30} alt="away team logo" />
          </div>
        </div>

        <div style={{ textAlign: "center", color: "green" }}>
          {fixture.fixture.status.elapsed ? `${fixture.fixture.status.elapsed} minutes` : "Not Started"}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ backgroundColor: "#4A4A4A", color: "#D3D3D3", padding: "5px", fontSize: "1.2rem" }}>Events</h1>
        {fixture.events?.length > 0 ? (
          fixture.events.map((event, index) => (
            <div key={`${event.team.id}-${index}`} style={{ padding: "20px" }}>
              {event.player?.name || "Unknown Player"}
              <img src={event.team.logo} width={20} alt="event team logo" />
              <br />
              <div style={{ color: "green" }}>{event.time?.elapsed} minutes</div>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>

      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ backgroundColor: "#4A4A4A", color: "#D3D3D3", padding: "5px", fontSize: "1.2rem" }}>Score</h1>

        <div style={{ padding: "10px" }}>
          First Half
          <br />
          {fixture.score.halftime?.home !== null ? fixture.score.halftime.home : "-"} : {fixture.score.halftime?.away !== null ? fixture.score.halftime.away : "-"}
        </div>

        {fixture.score.fulltime?.home !== null && (
          <div style={{ padding: "10px" }}>
            Full Time
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        )}

        {fixture.score.extratime?.home !== null && (
          <div style={{ padding: "10px" }}>
            Extra Time
            <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        )}

        {fixture.score.penalty?.home !== null && (
          <div style={{ padding: "10px" }}>
            Penalty
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ backgroundColor: "#4A4A4A", color: "#D3D3D3", padding: "5px", fontSize: "1.2rem" }}>Match Details</h1>

        <div style={{ padding: "10px" }}>Stadium - {fixture.fixture.venue?.name || "Unknown Venue"}</div>
        <div style={{ padding: "10px" }}>Referee - {fixture.fixture.referee || "No referee assigned"}</div>
        <div style={{ padding: "10px" }}>Country - {fixture.league.country}</div>
        <div style={{ padding: "10px" }}>{fixture.league.round}</div>
        <div style={{ padding: "10px" }}>{fixture.league.season}</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button style={{ padding: "10px 20px", backgroundColor: "#333", color: "white", borderRadius: "5px" }}>
          Pay for Live Odds
        </button>
      </div>
    </div>
  );
}
