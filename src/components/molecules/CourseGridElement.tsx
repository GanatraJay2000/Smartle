import React from 'react';
import { CreditsTag } from '../../util/resources';
interface Props{
    course: any;
}
const CourseGridElement = ({ course }: Props) => {    
    return (        
        <div className='bg-accent-200 rounded-md p-4 shadow-xl relative '>
            {
                course.credits ? (<>
                    <img src={CreditsTag.default} alt="Credits" className='absolute -top-2 -right-2' />
                </>) : (<></>)
            }
            {
                course.image ? (<>
                    <img className="w-full h-32 rounded-md" src={course.image} alt={course.title} />
                </>) : (
                    <div className='w-full h-32 rounded-md bg-color-100'></div>
                )
            }            
            <h2 className='text-lg font-poppins font-black mt-2'>{course.title}</h2>
            <div className='text-sm my-2 relative'>
                <p>{course.desc}</p>
                <div className="select-none bg-gradient-to-b from-transparent via-transparent to-accent-200 w-full h-full absolute inset-0"></div>
            </div>
        </div>
    );
}

export default CourseGridElement;
