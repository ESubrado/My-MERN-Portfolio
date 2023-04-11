import React, {useEffect, useState } from 'react';
import {Link, useLocation } from 'react-router-dom'
import {Nav,NavItem, } from 'react-bootstrap';
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
        <Nav className='navbar navbar-expand-lg d-flex justify-content-around bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5'>
        <div className='py-4 py-lg-0' id="navbarCollapse">
          <div className='navbar-nav ms-auto py-0'>
            <NavItem><Link to="/" className={"nav-link" + (url === "/" ?" active-red" : "")}>Home</Link></NavItem>
            <NavItem><Link to="/about" className={"nav-link" + (url === "/about" ?" active-red" : "")}>About</Link></NavItem>
            <NavItem><Link to="/skills" className={"nav-link" + (url === "/skills" ?" active-red" : "")}>Skills</Link></NavItem>
            <NavItem><Link to="/work" className={"nav-link" + (url === "/work" ?" active-red" : "")}>Work</Link></NavItem>
            <NavItem><Link to="/contact" className={"nav-link" + (url === "/contact" ?" active-red" : "")}>Contact</Link></NavItem>        
          </div>        
        </div>   
      </Nav>     
    )
  
}




// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (    
//     <nav className='navbar navbar-expand-lg d-flex justify-content-around bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5'>
//       <div className='py-4 py-lg-0' id="navbarCollapse">
//         <div className='navbar-nav ms-auto py-0'>
//           <a className="nav-item nav-link active" href='/'>Home</a>         
//           <a className="nav-item nav-link" href='/about'>About</a> 
//           <a className="nav-item nav-link" href='/skills'>Skills</a>               
//           <a className="nav-item nav-link" href='/work'>Work</a>             
//           <a className="nav-item nav-link" href='/contact'>Contact</a>
//         </div>        
//       </div>   
//     </nav>     
//   );
// };

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

