import React from 'react';
import { BlueBar } from '../../../util/resources';
import ContactForm from '../../molecules/ContactForm';

const Contact = () => {
  let fields:any = [
    {
      label: "Name",
      required: true,
      type: 'text',
    },    
    {
      label: "Email Address",
      required: true,
      type: 'email',
      width: '1/2',      
    },    
    {
      label: "Phone",
      required: true,
      type: 'number',      
      width: '1/2',      
    },    
    {
      label: "Contacting As:",
      required: true,
      type: 'multiradio',            
      children: [
        {label:'Company', value:'Company'},
        {label:'School', value:'School'},        
      ],      
    },    
    {
      label: "Company / School",
      required: true,
      type: 'text',
      extraClass:''
    },  
    {
      label: "Brief Message",
      required: true,
      type: 'text',        
      multiline: true,
      extraClass:'my-6'
    },    
  ];
  return <div className='mx-auto relative md:mt-40' id="contactForm">  
    <h1 className="text-4xl mb-8 font-extrabold text-center">Get in touch with us</h1>
    <img src={BlueBar.default} className='absolute top-40' alt="" />  
    <div className="py-3 mx-5 md:mx-auto md:w-3/5 z-10 relative ">
      <ContactForm fields={fields} color="bg-contrastAccent-200" btnColor="bg-contrast-400" />
    </div>
  </div>;
}

export default Contact;