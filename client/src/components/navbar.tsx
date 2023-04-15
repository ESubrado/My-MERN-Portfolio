import React, {useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom'
import {Nav,NavItem, } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faLaptopCode, faLaptopFile, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
//import Logo from '../assets/logo.png';
//import { Link } from 'react-scroll'; // for SPA

function Navbar (){  
    const location : any = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
 
    return (
        <Nav className='navbar navbar-expand-lg bg-white navbar-light d-flex justify-content-center shadow py-lg px-4 mx-auto px-lg-5 wow'>
        <div className='navbar-collapse py-4 py-lg-0 d-flex' id="navbarCollapse">
          {/* <div className='navbar-nav py-0 ms-auto'>            
            <NavItem><Link to="/mern" className={"nav-link" + (url === "/about" ?" active" : "")}><FontAwesomeIcon icon={faCircleUser} /> MERN</Link></NavItem>          
          </div>   
          <div className='navbar-brand py-3 px-4 d-none d-lg-block mx-3'></div> */}
          <div className='navbar-nav py-0 mx-auto'>
            <NavItem><Link to="/" className={"nav-link" + (url === "/" ?" active" : "")}><FontAwesomeIcon icon={faHouse}/> Home</Link></NavItem>
            <NavItem><Link to="/about" className={"nav-link" + (url === "/about" ?" active" : "")}><FontAwesomeIcon icon={faCircleUser} /> About</Link></NavItem>
            <NavItem><Link to="/skills" className={"nav-link" + (url === "/skills" ?" active" : "")}><FontAwesomeIcon icon={faLaptopCode} /> Skills</Link></NavItem>
            <NavItem><Link to="/work" className={"nav-link" + (url === "/work" ?" active" : "")}><FontAwesomeIcon icon={faLaptopFile} /> Work</Link></NavItem>
            <NavItem><Link to="/contact" className={"nav-link" + (url === "/contact" ?" active" : "")}><FontAwesomeIcon icon={faPhoneVolume} /> Contact</Link></NavItem>        
          </div>    
        </div>   
      </Nav>     
    )
  
}


export default Navbar;


// Here, we display our Navbar
// export default function Navbar() {
//  return (
//    <div>
//      <nav className="navbar navbar-expand-lg navbar-light bg-light">
//        <NavLink className="navbar-brand" to="/">
//           <img alt="" style={{"width" : 25 + '%'}} src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img>
//        </NavLink>
//         <button
//          className="navbar-toggler"
//          type="button"
//          data-toggle="collapse"
//          data-target="#navbarSupportedContent"
//          aria-controls="navbarSupportedContent"
//          aria-expanded="false"
//          aria-label="Toggle navigation"
//        >
//          <span className="navbar-toggler-icon"></span>
//        </button> 
 
//        <div className="collapse navbar-collapse" id="navbarSupportedContent">
//          <ul className="navbar-nav ml-auto">
//            <li className="nav-item">
//              <NavLink className="nav-link" to="/create">
//                Create Record
//              </NavLink>
//            </li>
//          </ul>
//        </div> 
//      </nav>  
//    </div>
   
//  );
// }

