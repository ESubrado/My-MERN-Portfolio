import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';


const PicModal = (props : any) => { 
    //const [urlPics, setUrlPics] = useState([]);  
    
    //useEffect(()=>{
    //    setUrlPics(typeof props.url === "string" ? [] : props.url);
	//}, urlPics);

    function CarouselSection(){ 
        return (         
            props.url.map((itemurls : any, key = 0) => {
                key++
                return (                    
                    <Carousel.Item  key={key}>
                        <img
                        className="img-fluid" 
                        style={{ width: 1200, height: 650 }}
                        src={props.show ? require(`../../assets/images/${itemurls}`) : ``}                            
                        alt="First slide"
                        />
                        <Carousel.Caption key={key}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>                    
                );
            })  
        )
    }

   
    let inputStr = null;
    if(typeof props.url === "object"){                            
        inputStr = <Carousel>{CarouselSection()}</Carousel>                           
    }else{
        inputStr = <img className='img-fluid' alt='' src={props.show ? require(`../../assets/images/${props.url}`) : ``}/>
    }  

    return (  
        <>
            <Modal {...props.modalControls}
                size={props.modsize ? props.modsize : "xl"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    {inputStr}                  
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.modalControls.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
)};

export default PicModal;