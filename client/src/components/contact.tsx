import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import 'animate.css/animate.css'

const containerStyle = {
    width: 'auto',
    height: '400px'
  };
  
  const center = {
    lat: 9.314124,
    lng: 123.281373
  };

  const position = {
    lat: 9.314124,
    lng: 123.281373
  }


const Mailto = ({ email, subject, body, children } : any) => {
    return (
      <a className="btn btn-primary py-3 px-5" rel="noreferrer" target="_blank" href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
};

    

const Contact = () => {
    return (
        <div name='contact' id='contact' className='w-full h-screen container-fluid mt-0 text-black-300'>
            <div className="container py-6 h-full">
                <div className="remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" className="row g-5 mb-5 align-items-center" duration={1} >    
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">Let's Work Together</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <Mailto email="eug.subradojr@gmail.com" subject="Subject" body="Message goes here...">
                                Say Hello!
                            </Mailto>                            
                        </div>
                    </AnimationOnScroll>
                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 col-md-6 remove-scroll" >
                        <AnimationOnScroll animateIn="animate__fadeInUp" duration={3}>   
                            <p className="mb-2">My address:</p>
                            <h3 className="fw-bold">935 B. Catarata Street, Batinguel, Dumaguete City, Philippines</h3>
                            <hr className="w-100"/>
                            <p className="mb-2">Call me:</p>
                            <h3 className="fw-bold">+63 915 421 1919</h3>
                            <hr className="w-100"/>
                            <p className="mb-2">Mail me:</p>
                            <h3 className="fw-bold">eug.subradojr@gmail.com</h3>
                            <hr className="w-100"/>
                            <p className="mb-2">Follow me:</p>
                            <div className="d-flex pt-2">     
                                <a className="btn btn-square btn-primary me-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eugene-jr-s-338aa2120/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a className="btn btn-square btn-primary me-2" target="_blank" rel="noreferrer" href="https://www.facebook.com/xteug/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a className="btn btn-square btn-primary me-2" target="_blank" rel="noreferrer" href="https://github.com/ESubrado/"><FontAwesomeIcon icon={faGithubAlt} /></a>
                            </div>
                        </AnimationOnScroll>                       
                    </div>
                    <div className="col-lg-7 col-md-6 remove-scroll">
                        <AnimationOnScroll animateIn="animate__fadeInUp" duration={3} >
                        <LoadScript  googleMapsApiKey="AIzaSyDIKLO-lC1JlVmy4mBxh_kB2jY1JIODnQQ">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                >
                                { /* Child components, such as markers, info windows, etc. */ }
                                <Marker                                   
                                    position={position}
                                />
                            <></>
                            </GoogleMap>
                        </LoadScript>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div> 
      );
}

export default Contact;