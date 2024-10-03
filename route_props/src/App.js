
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './sereense/Home';
import About from './sereense/About';
import Contact from './sereense/Reach';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About name="Sachine" age={45} />} />
        <Route path="/contact" element={<Contact email={" '             ' @gmail.com"} Mobilenumber={91         } />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
