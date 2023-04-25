import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AnimationOnScroll } from "react-animation-on-scroll"
import ProgressBar from "@ramonak/react-progress-bar";

import 'animate.css/animate.css'

const Skills = () => {  


  return (
    <div name='skills' id="skill" className='w-full h-screen bg-light container-fluid mt-0 text-black-300'>
        <div className="container px-8 flex justify-center h-full">
            <div className="row g-5 align-items-center">           
                <div className="col-lg-6 remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} >  
                        <h1 className="display-5 mb-5">Skills & Experience</h1>
                        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
                        <h3 className="mb-4">My Skills</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">HTML</h6>
                                        <h6 className="font-weight-bold">95%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} animateOnRender={true} completed={95} maxCompleted={100} isLabelVisible={false}/>                                  
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">CSS</h6>
                                        <h6 className="font-weight-bold">85%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#ffc107'  animateOnRender={true} completed={85} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">PHP</h6>
                                        <h6 className="font-weight-bold">90%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#dc3545' animateOnRender={true} completed={90} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Javascript</h6>
                                        <h6 className="font-weight-bold">90%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#198754' animateOnRender={true} completed={90} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Angular JS</h6>
                                        <h6 className="font-weight-bold">95%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#000' animateOnRender={true} completed={95} maxCompleted={100} isLabelVisible={false}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Wordpress</h6>
                                        <h6 className="font-weight-bold">85%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#0dcaf0' animateOnRender={true} completed={85} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>                   
                </div>

                <div className="col-lg-6 remove-scroll" data-wow-delay="0.5s">
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={3} className='ml-3' >
                        <Tabs defaultActiveKey="firstSk" id="justify-tab-example" className='mb-3 rounded border border-2 fs-5' justify variant='pills' fill >
                            <Tab eventKey="firstSk" title="Experience">
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>UI Designer</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Product Designer</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Web Designer</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Apps Designer</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Apex Software Inc</h6>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="secondSK" title="Education">
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>UI Design Course</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>IOS Development</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Web Design</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Apps Design</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2000 - 2045</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                </div>
                            </Tab>                       
                        </Tabs>
                    </AnimationOnScroll>                   
                </div>

            </div>
        </div>      
    </div>
  );
  
};

export default Skills;
