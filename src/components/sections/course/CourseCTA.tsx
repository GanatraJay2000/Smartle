import Button from '@mui/material/Button';
import React from 'react';

const CourseCTA = () => {
    return (
        <div className='bg-accent-200 pt-20 pb-16'>
            <div className="w-10/12 mx-auto">
                <div className="text-cener pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tempore alias impedit quasi eligendi, dolorum ullam non provident quod </div>
                <div className="flex justify-center gap-4">
                    <Button className='px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Buy Course</Button>
                    <Button className='px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Book Trial</Button>
                </div>
            </div>            
        </div>
    );
}

export default CourseCTA;
