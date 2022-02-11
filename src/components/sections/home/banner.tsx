import { Button } from '@mui/material';
import React from 'react';
import PopOutCircle from '../../atom/PopOutCircle';
import { Demo3 as BImg,   Dog } from '../../../util/resources';
import { Link } from 'react-router-dom';

const Banner = () => {
  let glass = {'background': 'rgba( 255, 255, 255, 0.3 )','backdropFilter': 'blur( 5px )','WebkitBackdropFilter': 'blur( 5px )','borderRadius': '10px','borderRight': '.5px solid rgba( 255, 255, 255, 0.28 )','borderBottom': '.5px solid rgba( 255, 255, 255, 0.28 )',} as React.CSSProperties;
  
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row mb-20 md:mb-40 md:px-32 md:pt-8 relative">  
      <div className="mt-60 md:mt-0 md:mb-0 w-full md:w-1/2 h-full md:pt-20 flex px-4 md:px-0 md:justify-end">
        <div className="w-full">
          <h2 className='text-bold text-3xl md:text-5xl font-black font-poppins text-center md:text-left'>
            Smart Skills for the<br className='hidden md:block' /> 21st Century Learner
          </h2>
          <p className='text-center md:text-left text-xl md:text-2xl mt-4 md:mt-8'>
            Fun, social, and safe learning<br className='hidden md:block' /> experiences for ages 8 to14
          </p>
          <Link to='/courses' className=''>
            <Button className='mt-12 rounded-xl shadow-xl font-bold py-3 w-full md:w-auto md:px-24 h-9 text-white bg-color-400 '>
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>  
      <div className="select-none w-full md:w-1/2 h-full relative flex md:block justify-center">
        <div className="hidden md:block">
          <PopOutCircle image={BImg} imageSize="4" />          
        </div>
        <div className="block md:hidden">
          <PopOutCircle image={BImg} imageSize="2.5" />          
        </div>
        <img src={Dog} alt="Dogo" className='right-0 absolute z-50 h-24 -bottom-28 md:bottom-16 scale-90 md:scale-100' />
        <div className="w-full flex justify-end absolute md:relative -bottom-40 md:bottom-0">
        <div style={glass} className="text-slate-900 font-bold py-4 px-5 text-md h-20 w-80 relative z-40 scale-90 md:scale-100">
          Our mentors make learning easy,<br />Explore our courses now!!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;