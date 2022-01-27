import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../molecules/Socials';
import { Logo } from "../../util/resources";

const Footer = ()=> {
  return (
    <footer className='bg-stone-800 text-white'>
      <div className="w-10/12 mx-auto pt-8 pb-4">
        <div className="mb-10">          
          <Link to='/'>
            <img src={Logo.default} alt="" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="w-2/12">
            <Stack spacing={2}>
              <div className="text-lg font-bold">
                  Company
              </div>
              <Link to={'/'} className="font-medium">About Us</Link>              
              <Link to={'/'} className="font-medium">Business</Link>              
              <Link to={'/'} className="font-medium">Contact Us</Link>              
            </Stack>
          </div>
          <div className="w-2/12">
            <Stack spacing={2}>
              <div className="text-lg font-bold">
                  Legal
              </div>
              <Link to={'/'} className="font-medium">Cookies Policy</Link>              
              <Link to={'/'} className="font-medium">Privacy Policy</Link>              
              <Link to={'/'} className="font-medium">Terms of Service</Link>              
            </Stack>
          </div>
          <div className="w-2/12">
            <Stack spacing={2}>
              <div className="text-lg font-bold">
                  Support
              </div>
              <Link to={'/'} className="font-medium">FAQs</Link>              
              <Link to={'/'} className="font-medium">Safety Center</Link>              
              <Link to={'/'} className="font-medium">Community</Link>              
            </Stack>
          </div>
        </div>
        <div className='mt-12 mb-4 h-px w-full bg-zinc-500' ></div>
        <div className="mb-3 flex justify-between">
          <div className="">&copy; 2021 - All rights reserved</div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
