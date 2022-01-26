import React from 'react';
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
        {label:'Parent', value:'Parent'},
        {label:'School', value:'School'},
        {label:'Instructor / Coach', value:'Instructor / Coach'},
      ],      
    },    
    {
      label: "Breif Message",
      required: true,
      type: 'text',        
      multiline: true,
      extraClass:'my-6'
    },    
  ];
  return <div className='mx-auto'>    
    <div className="bg-accent-200 py-3 px-6 rounded-lg transition hover:shadow-lg shadow-md">
      <ContactForm fields={fields} />
    </div>
  </div>;
}

export default Contact;