import React from "react";
import { useNavigate} from "react-router-dom";

import $ from "jquery";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import 'animate.css/animate.css';
import imageOneSm from '../../assets/images/imageOneSm.jpg';
import imageTwoSm from '../../assets/images/imageTwoSm.jpg';

const SmsProj = () => {
    let navigate = useNavigate();

    return (
        <>
            <div name='SmsProj01' id="SmsProj01" className='bg-light mt-0 text-black-300'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button> 
                    </div>
                </div>    
                <div className="row g-5 mx-0 px-3 pt-3">
                    <div className="col-lg-12">                      
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item><Nav.Link eventKey="first">Summary</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="second">Revamped Event Scheduler</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="third">Employee Upskilling Feature</Nav.Link></Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="w-full h-screen-proj container-fluid">
                                                <div className="container px-8 flex justify-center h-full"> 
                                                    <div className="row g-5 align-items-center">           
                                                        <div className="col-lg-12">
                                                            <label>First</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="w-full h-screen-proj container-fluid">
                                                <div className="container px-8 flex justify-center h-full"> 
                                                    <div className="row g-5 align-items-center"> 
                                                        <div className="col-lg-5 home-about-left">
                                                            <img className="img-fluid" src={imageOneSm} alt=""/>
                                                        </div>
                                                        <div className="offset-lg-1 col-lg-5 home-about-right">                                                            
                                                            <p className="my-2">
                                                                This collaborative feature enables event managers to assign employees into an enchancement training
                                                                based on a preferred catalog. These catalogs include some of best standards in pharmaceutical industry whose aim is to 
                                                                increase productivity and ultimately on achieving its goal. (LEAN Manufacturing and Six Sigma).</p>  

                                                            <p className="my-2"> 
                                                                The revamp version uses MVVM architectural pattern for manageability and better in error debugging. We also upgraded the Kendo UI version 
                                                                and used Bootstrap for layout. On Sharepoint backend support, instead of using javascript CSOM (Client Side Object Model) to get data, we are now
                                                                employing the REST API.                               
                                                            </p>                       
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="w-full h-screen-proj container-fluid">
                                                <div className="container px-8 flex justify-center h-full"> 
                                                    <div className="row g-5 align-items-center">     
                                                        <div className="col-lg-6 home-about-right home-about-right2 m-0">                                                          
                                                            <p className="my-2">
                                                                Another collaborative feature in which users are able to keep track their trainings, achievement and other competency certificate
                                                                which will then be used for employee appraisal or promotion.
                                                            </p>   
                                                            <p className="my-2">
                                                                It uses bootstrap for layout and kendo UI for grids and other components such as the dropdown option. There is also an administration page that only a user with special role have access in.
                                                                This is made possible my creating a permission group with special privileges within the Sharepoint site.
                                                            </p>                        
                                                        </div>
                                                        <div className="col-lg-5 home-about-left">
                                                            <img className="img-fluid" src={imageTwoSm} alt=""/>
                                                        </div>   
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div> 
            </div>  
        </>
   
   ); 
   

};


export default SmsProj;