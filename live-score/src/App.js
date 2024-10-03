import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Table from './components/Table';
import Fixture from './components/Fixture';
import { fetchFixtures } from './lib/fetch-data';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

function App() {
  const [fixtures, setFixtures] = useState([]);

  const fetchInfo = async () => {
    try {
      const data = await fetchFixtures();
      setFixtures(data.response);
    } catch (error) {
      console.error("Error fetching fixtures:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      {fixtures.length > 0 ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table data={fixtures} />} />
            <Route path="/fixture/:matchID" element={<Fixture />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
