import Alert  from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const AltButton = ({children, color = "primary", onClick} : Props) => { // can be exported to another page just for fun
    return (
        <Button className={'btn btn-' + color} onClick={onClick}>{children}</Button>
    )
}

const Playground = () => {

    const [displayAlert, showAlert] = useState(false)

    return (
        <>
            <div className='w-full h-screen container-fluid mt-0'>
                <div className="px-8 h-full">
                    {displayAlert && <Alert key="primary" variant="primary" onClose={()=> showAlert(false)} dismissible>My Alert</Alert>}
                    <AltButton color="primary" children='Click Me Me' onClick={() => showAlert(true)}></AltButton>
                </div>
            </div>
        </>   
    
    )
}

export default Playground