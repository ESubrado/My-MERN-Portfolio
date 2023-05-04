import React from "react";
import { useNavigate} from "react-router-dom";

const AlphaProj = () => {
    let navigate = useNavigate();

    return (
        <>
            <div name='alpha01' id="alpha01" className='bg-light mt-0 text-black-300'>
                <div className="row g-5 mx-3 px-1">
                    <div className="col-lg-12 text-left">
                        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button> 
                    </div>
                </div>    
                <div className="row g-5 mx-0 px-4">
                    <div className="col-lg-12">
                        <div className="w-full h-screen-proj container-fluid">
                            <div className="container px-8 flex justify-center h-full">                                    
                                <div className="row g-5 align-items-center">           
                                    <div className="col-lg-12">
                                        <label>Add Alpha Project Details Here</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>  
        </>
   
   ); 
   

};


export default AlphaProj;

