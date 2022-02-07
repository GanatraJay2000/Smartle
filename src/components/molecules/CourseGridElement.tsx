import React from 'react';
import { Link } from 'react-router-dom';
import { CreditsTag } from '../../util/resources';

interface Props{
    course: any;
}

const CourseGridElement = ({ course }: Props) => {    
    return (  
        <Link to={`/course/${course.slug}`}>
            <div className='bg-accent-200 rounded-md p-4 h-80 shadow-xl relative max-w-5xl'>
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
        </Link>
    );
}

export default CourseGridElement;
