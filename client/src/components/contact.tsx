import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll"

import 'animate.css/animate.css'

function Contact(){
    return (
        <div name='contact' id='contact' className='w-full h-screen container-fluid mt-0 text-black-300'>
            <div className="container py-6 h-full">
                <div className="remove-scroll">
                    <AnimationOnScroll animateIn="animate__fadeInUp" className="row g-5 mb-5 align-items-center" duration={1} >    
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">Let's Work Together</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <a className="btn btn-primary py-3 px-5" href="#">Say Hello</a>
                        </div>
                    </AnimationOnScroll>
                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 col-md-6 remove-scroll" >
                        <AnimationOnScroll animateIn="animate__fadeInUp" duration={3}>   
                            <p className="mb-2">My address:</p>
                            <h3 className="fw-bold">123 Street, New York, USA</h3>
                            <hr className="w-100"/>
                            <p className="mb-2">Call me:</p>
                            <h3 className="fw-bold">+012 345 6789</h3>
                            <hr className="w-100"/>
                            <p className="mb-2">Mail me:</p>
                            <h3 className="fw-bold">info@example.com</h3>
                            <hr className="w-100"/>
                            <p className="mb-2">Follow me:</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-primary me-2" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="#"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-primary me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </AnimationOnScroll>                       
                    </div>
                    <div className="col-lg-7 col-md-6 remove-scroll">
                        <AnimationOnScroll animateIn="animate__fadeInUp" duration={3} >
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            {/* <label for="name">Your Name</label> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            {/* <label for="email">Your Email</label> */}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            {/* <label for="subject">Subject</label> */}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            {/* <textarea className="form-control" placeholder="Leave a message here" id="message" style="height: 100px"></textarea> */}
                                            <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                            {/* <label for="message">Message</label> */}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div> 
      );
}

export default Contact;