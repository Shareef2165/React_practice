
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Landing from './Screens/Landing';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import Services from './Screens/Services';
import Careers from './Screens/Careers';
import About from './Screens/About';

function App() {
 

  return (
    <div className='App'>
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/dash" element={<Dashboard/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/careers" element={<Careers/>}/>
       <Route path="/about" element={<About/>}/>


      </Routes>
    
    </div>
  )
}

export default App
