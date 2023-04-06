import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
// We import all the components we need in our app
import Navbar from "./components/navbar";
//import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";
import AboutMe from "./components/about";
import Mern from "./components/mern";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Work from "./components/work";
import useScript from "./components/hooks";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<RecordList />} />*/}
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/create" element={<Create/>} />        
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/mern" element={<Mern/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/work" element={<Work/>}/>        
      </Routes>   
    </>    
  );
}

export default App;
