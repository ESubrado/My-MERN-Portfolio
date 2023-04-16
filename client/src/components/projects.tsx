import React from 'react';
import { data } from "../assets/data/data";

import proj1 from '../assets/images/project-1.jpg';
import proj2 from '../assets/images/project-2.jpg';
import proj3 from '../assets/images/project-3.jpg';
import proj4 from '../assets/images/project-4.jpg';
import proj5 from '../assets/images/project-5.jpg';
import proj6 from '../assets/images/project-6.jpg';


const Projects = () => {

  // projects file
  const project = data;
  //setProject(data);
  
  return (
    <div name='project' id='project' className='w-full h-screen bg-light container-fluid mt-0 text-black-300'>
      <div className='container px-8 flex justify-center h-full'>
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                        <li className="mx-3 active" data-filter="*">All Projects</li>
                        <li className="mx-3" data-filter=".first">UI/UX Design</li>
                        <li className="mx-3" data-filter=".second">Graphic Design</li>
                    </ul>
                </div>
            </div>
            <div className="row g-4 align-items-center portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={proj1} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={proj2} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={proj3} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={proj4} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={proj5} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={proj6} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Projects;
