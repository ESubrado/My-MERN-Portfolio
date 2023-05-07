import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PicModal from "../templates/picmodal";

// import $ from "jquery";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import 'animate.css/animate.css';
import imageOneSm from '../../assets/images/imageOneSm.jpg';
import imageTwoSm from '../../assets/images/imageTwoSm.jpg';

const SmsProj = () => {
    //let navigate = useNavigate();
    const [picModalShow, setPicModalShow] = React.useState({showModal: false, image: ''});    

    return (
        <>
            <div name='SmsProj01' id="SmsProj01" className='remove-scroll mt-0 text-black-300 it-bckrnd'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/projects"}}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item active>Manufacturing Projects</Breadcrumb.Item>
                        </Breadcrumb>
                    {/* <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>                        */}
                    </div>
                   
                </div>    
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row mx-3 px-3 pt-1">
                    <div className="col-lg-12">                      
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={2}>
                                <Nav variant="pills" className="flex-column">                                  
                                    <Nav.Item><Nav.Link eventKey="first">Event Scheduler</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="second">Employee Upskilling</Nav.Link></Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="w-full h-screen-proj container-fluid">
                                                <div className="container px-8 flex justify-center h-full">  
                                                    <div className="row g-5 align-items-center pb-4">     
                                                        <div className="col-lg-6 home-about-right home-about-right2 m-0"> 
                                                            <div className="heading_container">
                                                                <h2>Revamped Event Scheduler</h2>
                                                            </div>                                                              
                                                            <p className="py-0">
                                                                This collaborative feature enables event managers to assign employees into an enchancement training
                                                                based on a preferred catalog. These catalogs include some of best standards in pharmaceutical industry whose aim is to 
                                                                increase productivity and ultimately on achieving its goal. (LEAN Manufacturing and Six Sigma).</p>  

                                                            <p className="py-0"> 
                                                                The revamp version uses MVVM architectural pattern for manageability and better in error debugging. We also upgraded the Kendo UI version 
                                                                and used Bootstrap for layout. On Sharepoint backend support, instead of using javascript CSOM (Client Side Object Model) to get data, we are now
                                                                employing the REST API.                               
                                                            </p>                          
                                                        </div>
                                                        <div className="col-lg-5 home-about-left">
                                                            <img className="img-fluid modal-img" src={imageOneSm} alt="" onClick={() => setPicModalShow({showModal: true, image: 'imageOne.jpg'})}/>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="w-full h-screen-proj container-fluid">
                                                <div className="container px-8 flex justify-center h-full"> 
                                                    <div className="row g-5 align-items-center pb-4">     
                                                        <div className="col-lg-6 home-about-right home-about-right2 m-0"> 
                                                            <div className="heading_container">
                                                                <h2>Employee Upskilling Tool</h2>
                                                            </div>                                                              
                                                            <p className="py-0">
                                                                Another collaborative feature in which users are able to keep track their trainings, achievement and other competency certificate
                                                                which will then be used for employee appraisal or promotion.
                                                            </p>   
                                                            <p className="py-0">
                                                                It uses bootstrap for layout and kendo UI for grids and other components such as the dropdown option. There is also an administration page that only a user with special role have access in.
                                                                This is made possible my creating a permission group with special privileges within the Sharepoint site.
                                                            </p>                        
                                                        </div>
                                                        <div className="col-lg-5 home-about-left">
                                                            <img className="img-fluid modal-img" src={imageTwoSm} alt="" onClick={() => setPicModalShow({showModal: true, image: 'imageTwo.jpg'})}/>
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
                </AnimationOnScroll> 
            </div> 

            <PicModal
                modalControls={{
                    show: picModalShow.showModal,
                    onHide: () => setPicModalShow({showModal:false, image: ''})
                }}   
                show={picModalShow.showModal}             
                url={picModalShow.showModal ? picModalShow.image : ''}                
                hello="yes"
            />             
        </>
   
   ); 
   

};


export default SmsProj;