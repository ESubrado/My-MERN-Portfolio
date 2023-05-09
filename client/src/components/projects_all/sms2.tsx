import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PicModal from "../templates/picmodal";

// import $ from "jquery";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Badge from 'react-bootstrap/Badge';

import 'animate.css/animate.css';
import imageTwoSm from '../../assets/images/imageTwoSm.jpg';
import splogo from '../../assets/images/pngsp.png';
import jquerylogo from '../../assets/images/jquerylogo.png';
import btstrplogo from '../../assets/images/bootstraplogo.png';
import kendologo from '../../assets/images/kendologo.png';

const SmsProj2 = () => {
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
                            <Breadcrumb.Item active>Upskilling</Breadcrumb.Item>
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
                                            <h2>Employee Upskilling Tool</h2>
                                        </div>                                                              
                                        <p className="my-3">
                                            Another collaborative feature in which users are able to keep track their trainings, achievement and other competency certificate
                                            which will then be used for employee appraisal or promotion.
                                        </p>   
                                        <p className="my-3">
                                            It uses bootstrap for layout and kendo UI for grids and other components such as the dropdown option. There is also an administration page that only a user with special role have access in.
                                            This is made possible my creating a permission group with special privileges within the Sharepoint site.
                                        </p> 
                                        <div className="text-center fontlogolabel mb-2">      
                                            <Badge bg='danger' className="fontlogolabel" text='light'>Proprietary</Badge>                                                                                       
                                            <img className="ml-0 kendologoSize" alt="" title="Telerik Kendo UI" src={kendologo}/>
                                            <img className="ml-0 reactLogoSize" title="jQuery" alt="" src={jquerylogo}/>
                                            <img className="ml-0 spLogoSize" alt="" title="Sharepoint" src={splogo}/>
                                            <img className="ml-0 btstrapLogoSize" alt="" title="Bootstrap" src={btstrplogo}/>                                                               
                                        </div>                            
                                    </div>
                                    <div className="col-lg-4 home-about-left">
                                        <img className="img-fluid modal-img" style={{width: "90%"}} src={imageTwoSm} alt="" onClick={() => setPicModalShow({showModal: true, image: 'imageTwo.jpg'})}/>
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


export default SmsProj2;