import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PicModal from "../templates/picmodal";

import { AnimationOnScroll } from "react-animation-on-scroll";
import Badge from 'react-bootstrap/Badge';

import 'animate.css/animate.css';
import imageOneSm from '../../assets/images/imageOneSm.jpg';
import splogo from '../../assets/images/pngsp.png';
import jquerylogo from '../../assets/images/jquerylogo.png';
import btstrplogo from '../../assets/images/bootstraplogo.png';
import kendologo from '../../assets/images/kendologo.png';
import amchartsLogo from '../../assets/images/amcharts.png';

const SmsProj = () => {    
    const [picModalShow, setPicModalShow] = useState({showModal: false, image: ''});    

    return (
        <>
            <div name='SmsProj01' id="SmsProj01" className='remove-scroll mt-0 text-black-300 it-bckrnd'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/projects"}}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item active>Event Scheduler</Breadcrumb.Item>
                        </Breadcrumb>
                    {/* <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>                        */}
                    </div>
                   
                </div>    
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row mx-3 px-3 pt-1">
                    <div className="col-lg-12">                      
                        <div className="w-full h-screen-proj container-fluid">
                            <div className="flex justify-center">  
                                <div className="row align-items-center">
                                    <div className="col-lg-1"></div>     
                                    <div className="col-lg-6 home-about-right home-about-right2 mb-0">
                                        <div className="heading_container">   
                                            <h2 className="m-0">Revamped Event Scheduler</h2>  
                                        </div>                                                                                                   
                                        <p className="my-3">
                                            This collaborative feature enables event managers to assign employees into an enchancement training
                                            based on a preferred catalog. These catalogs include some of best standards in pharmaceutical industry whose aim is to 
                                            increase productivity and ultimately on achieving its goal. (LEAN Manufacturing and Six Sigma).</p>  

                                        <p className="my-3"> 
                                            The revamp version uses MVVM architectural pattern for manageability and better in error debugging. We also upgraded the Kendo UI version 
                                            and used Bootstrap for layout. On Sharepoint backend support, instead of using javascript CSOM (Client Side Object Model) to get data, we are now
                                            employing the REST API.                               
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
                                        <img className="img-fluid modal-img" src={imageOneSm} alt="" onClick={() => setPicModalShow({showModal: true, image: 'imageOne.jpg'})}/>                                                            
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