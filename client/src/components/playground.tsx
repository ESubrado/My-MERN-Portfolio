import Alert  from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import MealsProvider from './states/mealprovider';
import MealList from './states/mealsList';
import Counter from './states/counter';
import ReducerExecute from './states/reducer';
import SimpleCalculator from './states/calculator';
import SampleUseState from './states/sampleUseState';

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
                    <div className='row border m-3 p-3'>
                        <h6>Sample Children</h6>
                        <div className='col-12 text-center'>
                            {displayAlert && <Alert key="primary" variant="primary" onClose={()=> showAlert(false)} dismissible>My Alert</Alert>}
                            <AltButton color="primary" children='Click Me Me' onClick={() => showAlert(true)}></AltButton>
                        </div>
                    </div>
                    <div className='row border m-3 p-3'>
                        <div className='col-12'>  
                            <h6>Sample Provider</h6>                         
                            <div className='text-center'>
                                <MealsProvider>
                                    <MealList/>
                                    <Counter/>
                                </MealsProvider>
                            </div>
                        </div>
                    </div>     
                    <div className='row border m-3 p-3'>
                        <div className='col-12'>
                            <h6>Sample Reducer</h6>   
                            <div className='text-center'>
                                <ReducerExecute/>
                            </div>   
                        </div>
                    </div>    
                    <div className='row border m-3 p-3'>
                        <div className='col-12'>
                            <h6>Sample ADD Calculator (Use of Useref)</h6>   
                            <div className='text-center'>
                                <SimpleCalculator/>
                            </div>   
                        </div>
                    </div>                   
                    <div className='row border m-3 p-3'>
                        <div className='col-12'>
                            <h6>Sample Use State</h6>   
                            <div className='text-center'>
                               <SampleUseState/>
                            </div>   
                        </div>
                    </div>    
                </div>  
            </div>
        </>   
    
    )
}

export default Playground