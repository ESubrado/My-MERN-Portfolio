import React, {useEffect} from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import profilePic from "../assets/images/ProfilePic2022.png";
import { AnimationOnScroll } from "react-animation-on-scroll"

import $ from "jquery";
import Typed from "typed.js";

window.jQuery = $;


function Home(){

    useEffect(()=>{
        var typed;
        if ($('.typed-text-output').length === 1 && !typed) {
            var typed_strings = $('.typed-text').text();
            typed = new Typed('.typed-text-output', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        }
    });   

    return (
        <div name='home' id="home" className='w-full h-screen container-fluid bg-light mt-0'>       
            <div className='container px-8 flex justify-center h-full'>
                <div className="row g-5 align-items-center remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="col-lg-6 py-6 pb-0 pt-lg-0">
                        <h3 className='font-bold mb-3 text-[#000]'>Hi, I'm</h3>
                        <h1 className='font-bold text-[#000] mb-3'>
                            Eugene S. Subrado Jr
                        </h1>           
                        <h3 className="typed-text-output d-inline"> </h3>
                        <div className="typed-text d-none">Web Developer, Front End Developer, Sharepoint Developer, MERN Practitioner</div>
                        <p className='text-[#000] py-4 max-w-[700px]'>
                        I'm a web developer specializing in building (and occasionally
                        designing) exceptional digital experiences. Currently, I'm focused on
                        building responsive web applications. 
                        </p>
                        <div className="d-flex align-items-center pt-5">
                            <a href={"#"} className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                            <button type="button" className="btn-play" data-bs-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                            <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                        
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="col-lg-6">
                        <img className="img-fluid" src={profilePic} alt=""/>
                    </AnimationOnScroll>
                    {/* <div>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            <NavLink className="nav-link"  to="/work">
                                View Work
                                <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                                </span>
                            </NavLink>               
                        </button> 
                    </div> */}
                </div>
                
            </div>
        </div>
    )
}

export default Home;