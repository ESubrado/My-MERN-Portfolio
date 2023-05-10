import React from "react";
import { useNavigate, Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { NavLink } from "react-router-dom";

import { Button } from "bootstrap";
import RecordList from "./recordList";
import Badge from 'react-bootstrap/Badge';


const MernProj = () => {
    let navigate = useNavigate();

    return (
        <>
            <div name='mernProj01' id="mernProj01" className='remove-scroll mt-0 text-black-300'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/projects"}}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item active>Demo MERN Project</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>  */}
                    </div>
                </div>    
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} className="row mx-0 px-3 pt-1">
                    <div className="col-lg-12">
                        <div className="w-full h-screen-proj container-fluid">
                            <div className="container px-8 flex justify-center h-full">                                    
                                <div className="row g-5 align-items-center">           
                                    <div className="col-lg-12 m-0">   
                                        <div className="heading_container">   
                                            <h2 className="m-0">MERN Table</h2>  
                                        </div>                                      
                                        <RecordList />
                                        <button>
                                            <NavLink className="nav-link" to="/create">
                                                Create Record
                                            </NavLink>
                                        </button>  
                                        <div className="text-center fontlogolabel my-3">      
                                            <Badge bg='danger' className="fontlogolabel" text='light'>Functionality under construction</Badge> 
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </AnimationOnScroll>
                
            </div>  
        </>
   
   ); 
   

};


export default MernProj;
