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

const AwardsProj = () => {    
    const [picModalShow, setPicModalShow] = React.useState({showModal: false, image: '', modsize: ''});  

    return (
        <>
            <div name='sharePoint01' id="sharePoint01" className='remove-scroll mt-0 text-black-300'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/projects"}}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item active>Awards Project</Breadcrumb.Item>
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
                                            <h2 className="m-0">Company Awards Tool</h2>  
                                        </div>                                                                                                   
                                        <p className="my-3">
                                            One of my earliest collaborative project to which I've learn MVVM Architecture, SharePoint and advanced use of kendo components. This project was made
                                            to provide the company (pharmaceutical) means to select an innovative team project on annual basis and announce an award whoever gets the most vote.
                                        </p>  
                                        <p className="my-3"> 
                                            The innovation project is being submitted by teams and will be stored in a Sharepoint list. On selection process and setting a due date, the innovation must have a number
                                            of votes achieved on the first round. Top 10 projects will then be selected and goes into voting process again on the second or final round. 
                                            Whoever team gets most of the votes and by a preset condition will then get the awards with gold rank on first, silver for second and bronze for third.                                 
                                        </p>                                         
                                        <div className="text-center fontlogolabel mb-2">      
                                            <Badge bg='danger' className="fontlogolabel" text='light'>Proprietary</Badge>                                                                                       
                                            <img className="ml-0 kendologoSize" alt="" title="Telerik Kendo UI" src={kendologo}/>
                                            <img className="ml-0 reactLogoSize" title="jQuery" alt="" src={jquerylogo}/>
                                            <img className="ml-0 spLogoSize" alt="" title="Sharepoint" src={splogo}/>
                                            <img className="ml-0 btstrapLogoSize" alt="" title="Bootstrap" src={btstrplogo}/>                                                               
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
                    onHide: () => setPicModalShow({showModal:false, image: '', modsize: ''})
                }}   
                show={picModalShow.showModal}             
                url={picModalShow.showModal ? picModalShow.image : ''} 
                modsize={picModalShow.modsize}
            />      
        </>
   
   ); 
   

};


export default AwardsProj;