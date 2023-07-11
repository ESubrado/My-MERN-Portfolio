//import React, {useEffect} from "react";
import { AnimationOnScroll } from "react-animation-on-scroll"
import {Link} from "react-router-dom";
import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";


function AboutMe(){
    return (
        <div name='about' id='about' className='w-full h-screen container-fluid mt-0 text-black-300'>
          <div className="container px-8 flex justify-center h-full">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} >                 
                        <div className="d-flex align-items-center mb-5">
                            <div className="years flex-shrink-0 text-center me-4">
                                <h1 className="display-1 mb-0"><CountUp end={7} delay={1} className="text-black-300" /></h1>
                                <h5 className="mb-0">Years</h5>
                            </div>
                            <h3 className="lh-base mb-0">of working experience as a web site designer & developer</h3>
                        </div>
                        <p className='mb-4'><strong>Motto:</strong><i> "Nothing more satisfying than to experience success with people around working hard together in good and bad times.”</i></p>
                        <p className="mb-4">There are three fundamental keys I've learned during my years in IT on making the project or the career successful. There are: </p>
                        <p className="mb-3"><FontAwesomeIcon icon={faCircleCheck} /> Dedication to Craft</p>
                        <p className="mb-3"><FontAwesomeIcon icon={faCircleCheck} /> On Time Project Delivery</p>
                        <p className="mb-3"><FontAwesomeIcon icon={faCircleCheck} /> Confidence, Honesty and Integrity</p>
                        <Link to="/projects" className="btn btn-primary py-3 px-5 mt-3">See my Accomplished Projects</Link>                   
                    </AnimationOnScroll>   
                </div>
                <div className="col-lg-6 remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={3}>                      
                        <div className="row g-3 mb-4">
                            <div className="col-sm-6">
                                <img className="img-fluid rounded" src={about1} alt=""/>
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid rounded" src={about2} alt=""/>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                            <h2 className="text-primary fw-bold mb-0"><CountUp end={10000} delay={1} /> +</h2>
                        </div>
                        <p className="mb-4">Estimated number of clients who are covered with the projects (both new and revamped) in which I am the main contributor. This is a team effort.</p>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="border-end pe-3 me-3 mb-0">Projects Completed (Enterprise)</h5>
                            <h2 className="text-primary fw-bold mb-0"><CountUp end={5} delay={1.5} /></h2>
                        </div>
                        <p className="mb-0">Projects made ranging from awarding app, meeting invitation scheduler, pharmaceutical compliance automation and document generation.</p>                      
                    </AnimationOnScroll>
                </div> 
            </div>
        </div>
        </div>
      );
}

export default AboutMe;