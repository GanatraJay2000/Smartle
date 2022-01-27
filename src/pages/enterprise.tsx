import React from 'react';
import GradBlobBlueTR from '../components/atom/GradBlobBlueTR';
import { Banner, Solutions, Services, Approach, SampleWorks, Contact } from '../components/sections/enterprise';

const Enterprise = () => {  
  return (<>
    {/* <div>ENTERPRISE</div> */}
    <GradBlobBlueTR />
    <Banner />
    <Solutions />
    <Services />
    <Approach />
    <SampleWorks />
    <Contact />
  </>);
}

export default Enterprise;
