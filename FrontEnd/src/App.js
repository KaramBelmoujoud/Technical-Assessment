import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Pages/users';
import Home from './Pages/Home';
import Navbar from './Components/navbar';


function App() {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 min-w-screen min-h-screen overflow-hidden'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
