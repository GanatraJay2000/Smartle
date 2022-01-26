import Button from '@mui/material/Button';
import React from 'react';
interface Props {
    course: any;
}
const Banner = ({course}:Props) => {
    return (
        <div className="flex flex-wrap">
            <div className="w-1/2 pr-10">
                <h1 className="font-black text-3xl">{course.title}</h1>
                <p className="text-lg mt-4">{course.desc}</p>
                <div className="flex flex-wrap my-6">
                    <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-300"></div>
                    <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-300"></div>
                    <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-300"></div>
                </div>
                <h1 className="font-black text-xl">Learning Objectives</h1>
                <p className="text-lg mt-4">{course.objective}</p>
                <div className="flex gap-4">
                    <Button className='mt-12 px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Buy Course</Button>
                    <Button className='mt-12 px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Book Trial</Button>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-accent-200 rounded-md shadow-xl p-5 w-10/12">
                    <img src={course?.image} className="rounded-md w-full" alt="" />
                </div>
            </div>          
        </div>
    );
}

export default Banner;
