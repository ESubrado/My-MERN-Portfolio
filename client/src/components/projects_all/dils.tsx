import React, {useState} from "react";
import { Link} from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Badge from 'react-bootstrap/Badge';
import PicModal from "../templates/picmodal";

import 'animate.css/animate.css';
import noAvailImage from '../../assets/images/fallbackimage.png'
import splogo from '../../assets/images/pngsp.png';
import jquerylogo from '../../assets/images/jquerylogo.png';
import btstrplogo from '../../assets/images/bootstraplogo.png';
import kendologo from '../../assets/images/kendologo.png';
import amchartsLogo from '../../assets/images/amcharts.png';

const DilsProj = () => {
    const [picModalShow, setPicModalShow] = useState({showModal: false, image: '', modsize: ''}); 
    
    return (
        <>
            <div name='DilsProj01' id="DilsProj01" className='remove-scroll mt-0 text-black-300'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/projects"}}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item active>DIL Project</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>  */}
                    </div>
                </div>    
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row mx-0 px-3 pt-1">
                    <div className="col-lg-12">
                        <div className="w-full h-screen-proj container-fluid">
                            <div className="flex justify-center">                                    
                                <div className="row align-items-center">           
                                    <div className="col-lg-1"></div>     
                                    <div className="col-lg-6 home-about-right home-about-right2 mb-0">
                                        <div className="heading_container">   
                                            <h2 className="m-0">"Dear Investigator Letter" Project</h2>  
                                        </div>                                                                                                   
                                        <p className="my-3">
                                           This project focuses on document and letter auto generation exclusively used in pharmaceutical setting. When a new drug is released and adverse effects
                                           are detected among patients subjected to tests, the doctor records these to the DIL's System. Government agencies would need documents for these new drug to be
                                           officially approved. Instead of using office tools for recording, this system delivers it.
                                        </p>  
                                        <p className="my-3"> 
                                            All documents and its decription will be saved via Sharepoint site and will be retrieved by calling its primary key via CSOM (Client Side Object Model) thru CAMLQuery. 
                                            On this project, together with two other developers, we were able to formulate business logic get data needed to be displayed securely. Were also using RBAC 
                                            on setting permission to SP lists and document library.                              
                                        </p>   
                                        <p className="my-3"> 
                                            A new version of this tool is currently being developed as a module in the <Link to="/projects_all/alpha">ALPHA</Link> project. Instead of using SharePoint, the database is now being handled by AZURE.                              
                                        </p>                                         
                                        <div className="text-center fontlogolabel mb-2">      
                                            <Badge bg='danger' className="fontlogolabel" text='light'>Proprietary</Badge>     
                                            <img className="ml-0 kendologoSize" alt="" title="Telerik Kendo UI" src={kendologo}/>
                                            <img className="ml-0 reactLogoSize" title="jQuery" alt="" src={jquerylogo}/>
                                            <img className="ml-0 spLogoSize" alt="" title="Sharepoint" src={splogo}/>
                                            <img className="ml-0 btstrapLogoSize" alt="" title="Bootstrap" src={btstrplogo}/>     
                                            <img className="ml-1 kendologoSize" title="jQuery" alt="" src={amchartsLogo}/>                                                            
                                        </div>                   
                                    </div>
                                    <div className="col-lg-4 home-about-left mt-5">
                                        <img className="img-fluid modal-img" src={noAvailImage} alt="" onClick={() => setPicModalShow({showModal: true, image: 'fallbackimage.png', modsize: 'md'})}/>                                                            
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
                    onHide: () => setPicModalShow({showModal:false, image: '', modsize: 'md'})
                }}   
                show={picModalShow.showModal}             
                url={picModalShow.showModal ? picModalShow.image : ''} 
                modsize={picModalShow.modsize}
            />     
        </>
   
   ); 
   

};


export default DilsProj;