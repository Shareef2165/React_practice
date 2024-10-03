import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search teams..." 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
