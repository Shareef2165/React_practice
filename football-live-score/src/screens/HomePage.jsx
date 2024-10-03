import React, { useState, useEffect } from 'react';
import { fetchMatches } from '../api';
import MatchTable from '../components/MatchTable';

const HomePage = () => {
  const [matches, setMatches] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchMatches();
        setMatches(data || []); 
      } catch (error) {
        console.error('Error fetching matches:', error);
        setMatches([]); 
      }
    };

    loadMatches();
  }, []);


  const filteredMatches = matches?.filter((match) => {
    return match.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           match.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search teams..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {}
      {filteredMatches.length > 0 ? (
        <MatchTable matches={filteredMatches} />
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default HomePage;
