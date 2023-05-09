import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
// We import all the components we need in our app
import Navbarr from "./components/navbar";
//import RecordList from "./components/recordList";
import Edit from "./components/projects_all/edit";
import Create from "./components/projects_all/create";
import Home from "./components/home";
import AboutMe from "./components/about";
import Mern from "./components/projects_all/mern";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AlphaProj from './components/projects_all/alpha';
import AwardsProj from './components/projects_all/awards';
import SmsProj from './components/projects_all/sms';
import SmsProj2 from './components/projects_all/sms2';
import DilsProj from './components/projects_all/dils';
import MernProj from './components/projects_all/mernx';
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
        <Route path="/projects_all/mern" element={<Mern/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/projects_all/alpha" element={<AlphaProj/>}/>
        <Route path="/projects_all/sharepoint" element={<AwardsProj/>}/>        
        <Route path="/projects_all/sms" element={<SmsProj/>}/> 
        <Route path="/projects_all/sms2" element={<SmsProj2/>}/> 
        <Route path="/projects_all/dils" element={<DilsProj/>}/>     
        <Route path="/projects_all/mernx" element={<MernProj/>}/>                
      </Routes> 
      {/* <Footer/>   */}
    </>    
  );
}

export default App;
