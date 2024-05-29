import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Student from './Pages/Student';
import Admin from './Pages/Admin' ;
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Deposit from './Pages/Deposit';
import Receive from './Pages/Receive';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/student" element={<Student/>} /> 
          <Route path="/admin" element={<Admin/>} />
          <Route path="/deposit" element={<Deposit/>} /> 
          <Route path="/receive" element={<Receive/>} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;

