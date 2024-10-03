import React from 'react';
import { Link } from 'react-router-dom';

function MatchTable({ matches, currentPage, itemsPerPage, paginate }) {
  const indexOfLastMatch = currentPage * itemsPerPage;
  const indexOfFirstMatch = indexOfLastMatch - itemsPerPage;
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);

  const totalPages = Math.ceil(matches.length / itemsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentMatches.map(match => (
            <tr key={match.fixture.id}>
              <td>{match.teams.home.name}</td>
              <td>{match.teams.away.name}</td>
              <td>{new Date(match.fixture.date).toLocaleString()}</td>
              <td>
                <Link to={`/match/${match.fixture.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MatchTable;
