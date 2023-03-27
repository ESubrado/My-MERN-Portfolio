import React, { useState } from 'react';
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
import Logo from '../assets/logo.png';
//import { Link } from 'react-scroll'; // for SPA
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          {/* <Link to='home' smooth={true} duration={500}>
            Home
          </Link> */}
          <a href='/'>Home</a>
        </li>
        <li>
          {/* <Link to='about' smooth={true} duration={500}>
            About
          </Link> */}
          <a href='/about'>About</a>
        </li>
        <li>
          {/* <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link> */}
           <a href='/skills'>Skills</a>
        </li>
        <li>
          {/* <Link to='work' smooth={true} duration={500}>
            Work
          </Link> */}
            <a href='/work'>Work</a>
        </li>
        <li>
          {/* <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link> */}
            <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          {/* <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link> */}
          <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link> */}
          <a href='/about'>About</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link> */}
          <a href='/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link> */}
          <a href='/work'>Work</a>
        </li>
        <li className='py-6 text-4xl'>
          {/* {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link> */}
          <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

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

