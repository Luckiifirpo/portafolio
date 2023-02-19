import './App.css';
import {Routes, Route } from "react-router-dom";
import About from "./components/About"
import Contact from './components/Contact_Me';
import NavBar from './components/NavBar';
import Feedback from './components/Feedback';
import Projects from './components/Projects';
import React from 'react';

function App() {

  return ( 
    <div className="App">
      {<NavBar/>}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/sendEmail" element={<Feedback/>} />
      </Routes>
    </div>
  );
}

export default App;
