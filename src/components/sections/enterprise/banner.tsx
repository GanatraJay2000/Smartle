import { Button } from '@mui/material';
import React from 'react';
import PopOutCircle from '../../atom/PopOutCircle';
import { EnterpriseBannerGuy as BImg } from '../../../util/resources';

const Banner = () => {
 
  return (
    <div className="flex mb-40 px-32 pt-12 relative">  
      <div className="w-1/2 h-full pt-20 flex justify-end">
        <div className="">
          <h2 className='text-bold text-5xl font-black font-poppins'>Delivering impactful<br />learning solutions</h2>
          <p className='text-xl w-10/12 text-justify mt-8'>Offering world class e-learning content and solutions compatible with industry leading learning management systems</p>
          <Button className='mt-12 px-48 h-9 text-white bg-contrast-400'></Button>
        </div>
      </div>  
      <div className="select-none w-1/2 h-full relative">
        <PopOutCircle image={BImg} circleBg='bg-contrastAccent-200' imagePos='top' imageTop='0px' imageLeft='10px' imageOverflow='hiden' borderColor='blue' />        
      </div>
    </div>
  );
}

export default Banner;