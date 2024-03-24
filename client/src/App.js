import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import House from './home/House';
import Register from './home/Register'; // assuming you have a Register component
import Login from './home/Login';
import Contact from './home/Contact';
import View from './home/View'

import './App.css'



const  App= () => {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/home" element={<House />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/view" element={<View/>}/>
        </Routes>
    </Router>
    </div>
  );
};

export default App;

// App.jsx





