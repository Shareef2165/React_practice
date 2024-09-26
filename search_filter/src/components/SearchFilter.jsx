import React, { useState, useEffect, useRef, useCallback , useMemo} from 'react';
import './SearchFilter.css'; 

const SearchFilter = () => {
  
  const cities = useMemo(() => [
    'Hyderabad', 'Banglore', 'Chennai', 'Nellore', 'vizag', 
    'Guntur', 'Tirupati', 'kadapa', 'Kurnool', 'Amravathi',
    'Chittor', 'Kavali', 'Vijayawada', 'Kakinada', 'Godavari'
  ], []);

  const [searchCity, setsearchCity] = useState('');
  const [filteredcities, setFilteredcities] = useState(cities);

  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, );

  const filtercities = useCallback(() => {
    const query = searchCity;
    setFilteredcities(
      cities.filter(item =>
        item.toLowerCase().includes(query)
      )
    );
  }, [searchCity, cities]);

  useEffect(() => {
    filtercities();
  }, [searchCity, filtercities]);

  
  const handleInputChange = (e) => {
    setsearchCity(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        ref={inputRef}
        value={searchCity}
        onChange={handleInputChange}
        placeholder="Search cities..."
        className="search-input"
      />
      <ul className="item-list">
        {filteredcities.length > 0 ? (
          filteredcities.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))
        ) : (
          <li className="no-item">No cities found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter ;
