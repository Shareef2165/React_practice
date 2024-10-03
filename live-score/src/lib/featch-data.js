export async function fetchFixtures({ signal }) {
  const url = 'https://pinnacle-odds.p.rapidapi.com/kit/v1/special-markets?is_have_odds=true&sport_id=1';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0fa99b3cc9msh7c8e900e1ed2400p14b080jsnc148deebf93e',
      'x-rapidapi-host': 'pinnacle-odds.p.rapidapi.com',
    },
    signal,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}
