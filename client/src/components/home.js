import React, {useEffect} from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

import $ from "jquery"
import Typed from "typed.js"


function Home(){

    useEffect(()=>{
        if ($('.typed-text-output').length == 1) {
            var typed_strings = $('.typed-text').text();
            var typed = new Typed('.typed-text-output', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        }
    });   

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Eugene S. Subrado Jr
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Front End and Sharepoint Developer.
            </h2>
            <h2 className="typed-text-output d-inline"> </h2>
            <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I'm a web developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused on
            building responsive web applications.
            </p>
            <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
                </span>
            </button>
            </div>
      </div>
    </div>
    )
}

export default Home;