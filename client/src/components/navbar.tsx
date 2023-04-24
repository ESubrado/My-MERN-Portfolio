import React, {useEffect, useState } from 'react';
import {Link, useLocation, NavLink } from 'react-router-dom'
import {NavItem} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faLaptopCode, faLaptopFile, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaLinkedinIn,
// } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
//import Logo from '../assets/logo.png';
//import { Link } from 'react-scroll'; // for SPA

function Navbarr (){  
    const location : any = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
 
    return (
      <>
        <Navbar collapseOnSelect expand='xl' bg='light' variant='light'>
          <Container fluid className='mx-4'>                  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/mern" className={"nav-link" + (url === "/mern" ?" active" : "")}><FontAwesomeIcon icon={faCircleUser} /> MERN</Nav.Link>                  
              </Nav>
              <Nav>
                <Nav.Link as={NavLink} to="/" className={"nav-link" + (url === "/" ?" active" : "")}><FontAwesomeIcon icon={faHouse}/> Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about" className={"nav-link" + (url === "/about" ?" active" : "")}><FontAwesomeIcon icon={faCircleUser} /> About</Nav.Link>
                <Nav.Link as={NavLink} to="/skills" className={"nav-link" + (url === "/skills" ?" active" : "")}><FontAwesomeIcon icon={faLaptopCode} /> Skills</Nav.Link>
                <Nav.Link as={NavLink} to="/projects" className={"nav-link" + (url === "/projects" ?" active" : "")}><FontAwesomeIcon icon={faLaptopFile} /> Projects</Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className={"nav-link" + (url === "/contact" ?" active" : "")}><FontAwesomeIcon icon={faPhoneVolume} /> Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
      </>
    )
  
}


export default Navbarr;


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
