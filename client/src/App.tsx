import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
// We import all the components we need in our app
import Navbarr from "./components/navbar";
//import RecordList from "./components/recordList";
import Edit from "./components/projects/edit";
import Create from "./components/projects/create";
import Home from "./components/home";
import AboutMe from "./components/about";
import Mern from "./components/projects/mern";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AlphaProj from './components/projects/alpha';
import AwardsProj from './components/projects/awards';
import SmsProj from './components/projects/sms';
import DilsProj from './components/projects/dils';
import MernProj from './components/projects/mernx';
//import useScript from "./components/hooks";
//import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        {/* <Route exact path="/" element={<RecordList />} />*/}
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/create" element={<Create/>} />        
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects/mern" element={<Mern/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/projects/alpha" element={<AlphaProj/>}/>
        <Route path="/projects/sharepoint" element={<AwardsProj/>}/>        
        <Route path="/projects/sms" element={<SmsProj/>}/> 
        <Route path="/projects/dils" element={<DilsProj/>}/>     
        <Route path="/projects/mernx" element={<MernProj/>}/>                
      </Routes> 
      {/* <Footer/>   */}
    </>    
  );
}

export default App;
