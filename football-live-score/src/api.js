


const fetchMatches = async () => {
  const response = await fetch(`https://sport-highlights-api.p.rapidapi.com/football/events/1022538556`, {
    headers: {
      'x-rapidapi-key': '0fa99b3cc9msh7c8e900e1ed2400p14b080jsnc148deebf93e',
		'x-rapidapi-host': 'sport-highlights-api.p.rapidapi.com'
    },
  });
  const data = await response.json();
  return data.response;  
};

const fetchMatchDetails = async (id) => {
  const response = await fetch(`https://sport-highlights-api.p.rapidapi.com/football/events/1022538556?id=${id}`, {
    headers: {
     'x-rapidapi-key': '0fa99b3cc9msh7c8e900e1ed2400p14b080jsnc148deebf93e',
		'x-rapidapi-host': 'sport-highlights-api.p.rapidapi.com'
    },
  });
  const data = await response.json();
  return data.response[0];  
};

export { fetchMatches, fetchMatchDetails };
