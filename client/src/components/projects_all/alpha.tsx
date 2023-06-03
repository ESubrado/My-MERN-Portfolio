import React, {useState} from "react";
import { Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AnimationOnScroll } from "react-animation-on-scroll";
import PicModal from "../templates/picmodal";
import Badge from 'react-bootstrap/Badge';

import 'animate.css/animate.css';
import alphaMainPhoto from '../../assets/images/alp_main.jpg';
import splogo from '../../assets/images/pngsp.png';
import jquerylogo from '../../assets/images/jquerylogo.png';
import btstrplogo from '../../assets/images/bootstraplogo.png';
import kendologo from '../../assets/images/kendologo.png';
import amchartsLogo from '../../assets/images/amcharts.png';
import azurelogo from '../../assets/images/azurelogo.png'


const AlphaProj = () => {
    const [picModalShow, setPicModalShow] = useState({showModal: false, image: [''], modsize: ''}); 

    return (
        <>
            <div name='alpha01' id="alpha01" className='remove-scroll mt-0 text-black-300'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/projects"}}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item active>Alpha Project</Breadcrumb.Item>
                        </Breadcrumb>                       
                    </div>
                </div>    
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row mx-0 px-3 pt-2">
                    <div className="col-lg-12">
                        <div className="w-full h-screen-proj container-fluid">
                            <div className="flex justify-center">                                    
                                <div className="row align-items-center">           
                                    <div className="col-lg-1"></div>     
                                    <div className="col-lg-6 home-about-right home-about-right2 mb-0">
                                        <div className="heading_container">   
                                            <h2 className="m-0">Medical Automated Regulatory System (Project Alpha)</h2>  
                                        </div>                                                                                                   
                                        <p className="my-4">
                                            This is a collaborative application project designed to automate pharmaceutical regulatory processes. These includes risk management, 
                                            periodic safety reports for drugs, quality compliance, and safety governance. This tool is essential for major pharma companies
                                            in ensuring their products are of best quality and with accordance to existing laws.
                                            </p>  

                                        <p className="my-4"> 
                                            This application uses MVVM architectural pattern for manageability and better code apprehension. The backend support uses Microsoft Azure Technology 
                                            both in Database, RESTFUL API and services implementation. My responsibity tasks lies accurately displaying the data by the use of some of the major front-end libraries such
                                            as jQuery, Kendo UI, AM Charts, Bootstrap, and Sharepoint for Document repository.
                                        </p> 
                                        <div className="text-center fontlogolabel mb-2">      
                                            <Badge bg='danger' className="fontlogolabel" text='light'>Proprietary</Badge>                                                                                       
                                            <img className="ml-0 kendologoSize" alt="" title="Telerik Kendo UI" src={kendologo}/>
                                            <img className="ml-0 kendologoSize" alt="" title="Azure" src={azurelogo}/>
                                            <img className="ml-3 reactLogoSize" title="jQuery" alt="" src={jquerylogo}/>
                                            <img className="ml-0 spLogoSize" alt="" title="Sharepoint" src={splogo}/>
                                            <img className="ml-0 btstrapLogoSize" alt="" title="Bootstrap" src={btstrplogo}/>  
                                            <img className="ml-1 kendologoSize" title="jQuery" alt="" src={amchartsLogo}/>                                                              
                                        </div>                   
                                    </div>
                                    <div className="col-lg-4 home-about-left my-4">
                                        <img className="img-fluid modal-img" src={alphaMainPhoto} alt="" onClick={() => setPicModalShow({showModal: true, image: ['alp_1.jpg', 'alp_3.jpg', 'alp_4.jpg'], modsize: 'xxl'} )}/>                                                            
                                    </div>  
                                </div>
                            </div>
                        </div>                        
                    </div>
                </AnimationOnScroll>                
            </div>  

            <PicModal
                modalControls={{
                    show: picModalShow.showModal,
                    onHide: () => setPicModalShow({showModal:false, image: [''], modsize: ''})
                }}   
                show={picModalShow.showModal}             
                url={picModalShow.showModal ? picModalShow.image : ''}                
                hello="yes"
            />   
        </>
   
   ); 
   

};


export default AlphaProj;

