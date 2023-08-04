import { useEffect, useState } from 'react';
import {useLocation, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faLaptopCode, faLaptopFile, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

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
                <div className='nav-link'><Badge style={{fontSize: "12pt"}} bg='warning' text='dark'>Onging site construction</Badge></div>
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



