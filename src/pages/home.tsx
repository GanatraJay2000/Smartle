import React from 'react';
import GradientBlobBL from '../components/atom/GradientBlobBL';
import GradientBlobTR from '../components/atom/GradientBlobTR';
import PopOutCircle from '../components/atom/PopOutCircle';
import { Banner, Contact, Features, Method, OurCourses, Why } from '../components/sections/home';
import { BoyDab as BImg } from '../util/resources';

const Home = () => {
  return (<>
    <div>
      <Banner />    
      <OurCourses />  
      <Method />  
      <div className="py-20">
        <Features />  
      </div>
      <div className="py-16">
        <Why />
      </div>
      <div className="pb-20">
        <div className="flex flx-wrap w-10/12 mx-auto" >
          <div className="w-4/12 mr-10 flex items-center justify-center">
            <div className="">
              <PopOutCircle image={BImg} imageTop="4.7rem" imageLeft="0.2rem" />
            </div>
          </div>
          <div className="w-7/12" id="contactForm">
            <h1 className="text-4xl text-center mb-10 font-black">Get in touch with us</h1>
            <Contact />
          </div>
        </div>
      </div>
      <GradientBlobTR />
      <GradientBlobBL />
    </div>
  </>);
}

export default Home;
