import React, {useState} from "react";
import {Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AnimationOnScroll } from "react-animation-on-scroll";
// import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MernInstModal from "../templates/mernInstructionModal";
import ReadList from "../mern_dal/readList";
import Badge from 'react-bootstrap/Badge';


const MernProj = () => {
    const [mernInstModalShow, setMernInstModalShow] = useState({showModal: false, modsize: ''}); 

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
                            <div className="flex justify-center">                                    
                                <div className="row align-items-center">           
                                    <div className="col-lg-12 m-0">   
                                        <div className="my-3"> 
                                            <Row>
                                                <Col xs lg="6">
                                                    <Badge bg='danger' className="fontlogolabel" text='light'>Functionality under construction</Badge>
                                                    <h2 className="m-0">MERN Table</h2> 
                                                </Col>
                                                <Col xs lg="6" className="">
                                                    <Button onClick={() => setMernInstModalShow({showModal: true, modsize: 'lg'})} variant="primary" className="float-right">MERN Operation Instructions</Button>
                                                </Col>
                                            </Row> 
                                        </div>                                                                         
                                        <ReadList />                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </AnimationOnScroll>                
            </div>  

            <MernInstModal
                modalControls={{
                    show: mernInstModalShow.showModal,
                    onHide: () => setMernInstModalShow({showModal:false, modsize: 'lg'})
                }}   
                show={mernInstModalShow.showModal} 
                modsize={mernInstModalShow.modsize}
            />    
        </>
   
   ); 
   

};


export default MernProj;
