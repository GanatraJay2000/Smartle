import React from 'react';
import GradBlobResp from '../components/atom/GradBlobResp';
import GradientBlobBL from '../components/atom/GradientBlobBL';
import GradientBlobTR from '../components/atom/GradientBlobTR';
import PopOutCircle from '../components/atom/PopOutCircle';
import { Banner, Contact, Features, FeaturesMobile, Method, OurCourses, Why } from '../components/sections/home';
import { BoyDab as BImg, TopRightGradPng } from '../util/resources';

const Home = () => {
  return (<>
    <div className="overflow-x-hidden">
      <div className="block md:hidden"><GradBlobResp /></div>
      <Banner />    
      <OurCourses />  
      <Method />  
      <Features />
      {/* <div className="pt-10">
        <div className="hidden md:block">
          <Features />  
        </div>
        <div className="block md:hidden">
          <FeaturesMobile />  
        </div>
      </div> */}
      <div className="pt-10">
        <Why />
      </div>          <h1 className="text-3xl md:text-5xl text-center mb-10 font-black">Get in touch with us</h1>
      <div className="pb-20">
        <div className="flex flex-wrap flex-col-reverse md:flex-row w-10/12 mx-auto" >
          <div className="md:w-4/12 md:mr-10 flex items-center justify-center"> 
            <div className="hidden md:block">
              <PopOutCircle image={BImg} imageTop="4.7rem" imageLeft="0.2rem" />
            </div>           
          </div>
          <div className="md:w-7/12" id="contactForm">
            <Contact />
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <img className="absolute top-0 right-0 overflow-x-hidden" style={{height:'220vh'}}  src={TopRightGradPng} alt=""/>
        {/* <GradientBlobTR /> */}
        <GradientBlobBL />
      </div>
    </div>
  </>);
}

export default Home;
