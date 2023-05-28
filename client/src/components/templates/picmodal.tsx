import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PicModal = (props : any) => { 
    return (
        <>
            <Modal {...props.modalControls}
                size={props.modsize ? props.modsize : "xl"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body><img className="img-fluid" alt='' src={props.show ? require(`../../assets/images/${props.url}`) : ``}/></Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.modalControls.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
)};

export default PicModal;