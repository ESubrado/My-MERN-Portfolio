import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AnimationOnScroll } from "react-animation-on-scroll"
import ProgressBar from "@ramonak/react-progress-bar";

import 'animate.css/animate.css'

const Skills = () => {  


  return (
    <div name='skills' id="skill" className='w-full h-screen container-fluid mt-0 text-black-300'>
        <div className="container px-8 flex justify-center h-full">
            <div className="row g-5 align-items-center">           
                <div className="col-lg-6 remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} >  
                        <h1 className="display-5 mb-5">Skills & Experience</h1>                        
                        <p className="mb-4">These are my top skills acquired during my almost seven (7) years on engaging website development</p>
                        <h3 className="mb-4">My Skills</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Javascript / jQuery</h6>
                                        <h6 className="font-weight-bold">85%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} animateOnRender={true} completed={85} maxCompleted={100} isLabelVisible={false}/>                                  
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">CSS / Bootstrap / Responsive Pages</h6>
                                        <h6 className="font-weight-bold">82%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#ffc107'  animateOnRender={true} completed={82} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Kendo UI</h6>
                                        <h6 className="font-weight-bold">80%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#dc3545' animateOnRender={true} completed={80} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Sharepoint Front End and CAMLQuery</h6>
                                        <h6 className="font-weight-bold">80%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#198754' animateOnRender={true} completed={80} maxCompleted={100} isLabelVisible={false}/>                                     
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">React and MERN</h6>
                                        <h6 className="font-weight-bold">75%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#000' animateOnRender={true} completed={75} maxCompleted={100} isLabelVisible={false}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Angular 2+</h6>
                                        <h6 className="font-weight-bold">65%</h6>
                                    </div>                                   
                                    <ProgressBar height={"10px"} bgColor='#0dcaf0' animateOnRender={true} completed={65} maxCompleted={100} isLabelVisible={false}/>                                     
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
                                        <h5>Internal IT Auditor</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2013 - 2014</p>
                                        <h6 className="mb-0">Silliman University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Customer Service Representative</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2014 - 2015</p>
                                        <h6 className="mb-0">Qualfon Inc.</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Front-end and Sharepoint Developer</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2015 - 2021</p>
                                        <h6 className="mb-0">Xtensa Inc</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Senior Software Engineer / Tech Lead</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2021 - Present</p>
                                        <h6 className="mb-0">Xtensa Inc</h6>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="secondSK" title="Education">
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>Bachelor Degree on Computer Engineering</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2003 - 2007</p>
                                        <h6 className="mb-0">Cambridge University</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>ISC2 Certificate on Cybersecurity (Ongoing) </h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2023</p>
                                        <h6 className="mb-0">ISC2 Organization</h6>
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
