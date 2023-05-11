import React, {useEffect, useState, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Isotope from "isotope-layout";
//import { data } from "../assets/data/data";

import $ from "jquery";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLink } from '@fortawesome/free-solid-svg-icons'

import 'animate.css/animate.css'

import upskillimg from '../assets/images/upskillImg.jpg';
import awardsImg from '../assets/images/awardsImg.jpg';
import schedulerImg from '../assets/images/schedulerImg.jpg';
import dilsImg from '../assets/images/dilsImg.jpg';
import mernImg from '../assets/images/mernImg.jpg';
import alphaImg from '../assets/images/alphaImg.jpg';


const Projects = () => {

    // projects file
    //const project = data;
    //setProject(data);

    // init one ref to store the future isotope object
    const isotope = useRef<Isotope | null>();

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState("*");

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-container", {
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        });
        // cleanup
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');      
        });

        return () => isotope.current?.destroy();
    }, []);

    // handling filter key change
    useEffect(() => {
        setTimeout(function(){
            if (filterKey === "*") isotope.current?.arrange({ filter: `*` });            
            else isotope.current?.arrange({ filter: `.${filterKey}` }); 
        }, 200);                   
    }, [filterKey]);

    const handleFilterKeyChange = (key: string) => () =>{ 
        setFilterKey(key)
    };       
  
  return (
        <>
        <div name='project' id='project' className='container-xxl mt-0 text-black-300 mt-5 '>
            <div className='container remove-scroll'> 
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row g-5 mb-5 align-items-center" >
                    <div className="col-lg-4">
                        <h1 className="display-5 mb-0">My Projects</h1>
                    </div>
                    <div className="col-lg-8 text-lg-end">
                        <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                            <li className="mx-3 active" onClick={handleFilterKeyChange("*")} data-filter="*">All Projects</li>
                            <li className="mx-3" onClick={handleFilterKeyChange("first")} data-filter=".first">Sharepoint Related</li>
                            <li className="mx-3" onClick={handleFilterKeyChange("second")} data-filter=".second">Application</li>
                            <li className="mx-3" onClick={handleFilterKeyChange("third")} data-filter=".third">Self Project</li>
                        </ul>
                    </div>
                </AnimationOnScroll>         
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2} className='row g-4 portfolio-container'> 
                    <div className="col-lg-3 col-md-5 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid notready" src={alphaImg} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" href={alphaImg} data-lightbox="portfolio"><FontAwesomeIcon className='mt-2' icon={faEye} /></a>
                                <Link className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" to="/projects_all/alpha"><FontAwesomeIcon className='mt-2' icon={faLink} /></Link>
                            </div>
                        </div>
                    </div>                              
                    <div className="col-lg-3 col-md-5 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={schedulerImg} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" href={schedulerImg} data-lightbox="portfolio"><FontAwesomeIcon className='mt-2' icon={faEye} /></a>
                                <Link className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" to="/projects_all/sms"><FontAwesomeIcon className='mt-2' icon={faLink} /></Link>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-5 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={upskillimg} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" href={upskillimg} data-lightbox="portfolio"><FontAwesomeIcon className='mt-2' icon={faEye} /></a>
                                <Link className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" to="/projects_all/sms2"><FontAwesomeIcon className='mt-2' icon={faLink} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 portfolio-item third">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={mernImg} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" href={mernImg} data-lightbox="portfolio"><FontAwesomeIcon className='mt-2' icon={faEye} /></a>
                                <Link className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" to="/projects_all/mernx"><FontAwesomeIcon className='mt-2' icon={faLink} /></Link>
                            </div>
                        </div>
                    </div>     
                    <div className="col-lg-3 col-md-5 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={awardsImg} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" href={awardsImg} data-lightbox="portfolio"><FontAwesomeIcon className='mt-2' icon={faEye} /></a>
                                <Link className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" to="/projects_all/sharepoint"><FontAwesomeIcon className='mt-2' icon={faLink} /></Link>
                            </div>
                        </div>
                    </div>                    
                    <div className="col-lg-3 col-md-5 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={dilsImg} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" href={dilsImg} data-lightbox="portfolio"><FontAwesomeIcon className='mt-2' icon={faEye} /></a>
                                <Link className="btn btn-lg-square btn-outline2-secondary border-2 mx-1" to="/projects_all/dils"><FontAwesomeIcon className='mt-2' icon={faLink} /></Link>
                            </div>
                        </div>
                    </div>                                                                                
                </AnimationOnScroll>
            </div>
      </div>
    </>
  );
};

export default Projects;
