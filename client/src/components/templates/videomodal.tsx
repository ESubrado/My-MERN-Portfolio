import React from "react";
import Iframe from 'react-iframe'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const VidModal = (props : any) => {  
    return (
        <>
            <Modal {...props.modalControls}
                size={props.modsize ? props.modsize : "xl"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="ratio ratio-16x9">
                        <Iframe                             
                            width="100%"
                            height="100%"
                            url={props.show ? `${props.url}` : ``}                            
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            title="YouTube video player"                       
                        />                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.modalControls.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
)};

export default VidModal;