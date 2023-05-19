import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

const MernInstModal = (props : any) => {

    // if(props.show){
    //     console.log(props.hello)
    // }

    return (
        <>
            <Modal {...props.modalControls}
                size={props.modsize ? props.modsize : "xl"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h5>Instructions on Running this MERN Grid</h5>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li" className="border-0">On your code editor, open another terminal and "cd" to "server". You will be redirected to server folder.</ListGroup.Item>
                        <ListGroup.Item as="li" className="border-0">On the terminal, type: node server.js</ListGroup.Item>
                        <ListGroup.Item as="li" className="border-0">The server should now access the database thru express and node js.</ListGroup.Item>
                        <ListGroup.Item as="li" className="border-0">The Kendo Grid should populate with the stored data.</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.modalControls.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
)};

export default MernInstModal;