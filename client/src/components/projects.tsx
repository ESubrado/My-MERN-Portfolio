import React, {useEffect, useState, useRef} from 'react';
import Isotope from "isotope-layout";
import { data } from "../assets/data/data";

import $ from "jquery";
import { AnimationOnScroll } from "react-animation-on-scroll"

import 'animate.css/animate.css'

import proj1 from '../assets/images/project-1.jpg';
import proj2 from '../assets/images/project-2.jpg';
import proj3 from '../assets/images/project-3.jpg';
import proj4 from '../assets/images/project-4.jpg';
import proj5 from '../assets/images/project-5.jpg';
import proj6 from '../assets/images/project-6.jpg';


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
        }, 100);                   
    }, [filterKey]);

    const handleFilterKeyChange = (key: string) => () =>{ 
        setFilterKey(key)
    };       
  
  return (
        <>
        <div name='project' id='project' className=' bg-light container-xxl mt-0 text-black-300 mt-5 '>
            <div className='container'> 
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row g-5 mb-5 align-items-center" >
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-0">My Projects</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                            <li className="mx-3 active" onClick={handleFilterKeyChange("*")} data-filter="*">All Projects</li>
                            <li className="mx-3" onClick={handleFilterKeyChange("first")} data-filter=".first">UI/UX Design</li>
                            <li className="mx-3" onClick={handleFilterKeyChange("second")} data-filter=".second">Graphic Design</li>
                        </ul>
                    </div>
                </AnimationOnScroll>         
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2} className='row g-4 portfolio-container'>  
                    <div className="col-lg-4 col-md-6 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={proj1} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj1} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj1}><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={proj2} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj2} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj2}><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={proj3} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj3} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj3}><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={proj4} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj4} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj4}><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={proj5} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj5} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj5}><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src={proj6} alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj6} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={proj6}><i className="fa fa-link"></i></a>
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
