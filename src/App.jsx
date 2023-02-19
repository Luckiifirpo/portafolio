import './App.css';
import {Routes, Route } from "react-router-dom";
import About from "./components/About"
import Contact from './components/Contact_Me';
import NavBar from './components/NavBar';
import Feedback from './components/Feedback';
import Projects from './components/Projects';
import React, {useState} from 'react';

function App() {
  const [lang, setLang] = useState("es");

  return ( 
    <div className="App">
      {<NavBar lang={lang} setLang={setLang}/>}
      <Routes>
        <Route path="/" element={<About lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="/projects" element={<Projects lang={lang} />} />
        <Route path="/sendEmail" element={<Feedback lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;
