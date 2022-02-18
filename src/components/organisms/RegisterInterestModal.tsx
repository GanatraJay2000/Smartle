import Modal from '@mui/material/Modal'
import React from 'react'
import ContactForm from '../molecules/ContactForm';

interface Props{
    openInterest: any;
    handleCloseInterest: any;
    courseId: any;
}
const RegisterInterestModal = ({ courseId, openInterest, handleCloseInterest }: Props) => {
    let fields:any = [   
        {
            label: "Email Address",
            required: true,
            show:true,
            type: 'email',    
        },  
        {
            label: "Course Id",
            type: 'text',
            show: false,
            savedValue: courseId

        }
    ];
    
    return (
        <Modal
            open={openInterest}
            onClose={handleCloseInterest}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"            
        >
            <div className="w-10/12 md:w-1/2 pt-20 mx-auto">
                <div className="rounded-lg p-8 md:p-10 bg-white h-full w-full relative">
                    <div onClick={handleCloseInterest} className="shadow-lg cursor-pointer absolute -top-5 -right-5 h-10 w-10 bg-color-400 text-white text-3xl rounded-full flex justify-center items-center">
                        &times;
                    </div>
                    <h1 className="text-center text-3xl font-bold">Register Your Interest</h1>
                    <ContactForm fields={fields} color={'transparent'} classes='mt-4' fieldClasses='' />
                </div>
            </div>
        </Modal>
    )
}

export default RegisterInterestModal;