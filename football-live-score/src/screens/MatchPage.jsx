import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMatchDetails } from '../api';  

import MatchDetails from '../components/MatchDetails';

function MatchPage() {
  const { id } = useParams();
  const [matchDetails, setMatchDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMatchDetails = async () => {
      const data = await fetchMatchDetails(id);
      setMatchDetails(data);
      setLoading(false);
    };
    loadMatchDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <MatchDetails matchDetails={matchDetails} />
    </div>
  );
}

export default MatchPage;
