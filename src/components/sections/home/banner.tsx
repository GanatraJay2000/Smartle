import { Button } from '@mui/material';
import React from 'react';
import PopOutCircle from '../../atom/PopOutCircle';
import { Demo as BImg,   Dog } from '../../../util/resources';

const Banner = () => {
  let glass = {'background': 'rgba( 255, 255, 255, 0.3 )','backdropFilter': 'blur( 5px )','WebkitBackdropFilter': 'blur( 5px )','borderRadius': '10px','borderRight': '.5px solid rgba( 255, 255, 255, 0.28 )','borderBottom': '.5px solid rgba( 255, 255, 255, 0.28 )',} as React.CSSProperties;
  
  return (
    <div className="flex mb-40 px-32 pt-12 relative">  
      <div className="w-1/2 h-full pt-20 flex justify-end">
        <div className="">
          <h2 className='text-bold text-5xl font-black font-poppins'>Smart Skills for the<br /> 21st Century Learner</h2>
          <p className='text-2xl mt-8'>Fun, social, and safe learning<br /> experiences for ages 8 to14</p>
          <Button className='mt-12 px-48 h-9 text-white bg-color-400'></Button>
        </div>
      </div>  
      <div className="select-none w-1/2 h-full relative">
        <PopOutCircle image={BImg} />
        <img src={Dog} alt="Dogo" style={{top:'15rem'}} className='absolute z-20 left-96 h-24' />
        <div style={glass} className="py-4 px-5 text-md h-20 w-80 absolute z-10 top-80 left-52">
          Our mentors make learning easy,<br />Explore our courses now!!
        </div>
      </div>
    </div>
  );
}

export default Banner;