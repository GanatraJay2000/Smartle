import React from 'react';
import { Link } from 'react-router-dom';
import { CreditsTag } from '../../util/resources';

interface Props{
    course: any;
    width?: string;
}

const CourseGridElement = ({ course, width='w-3/12' }: Props) => {
    return (
        <div className={`${width} md:p-3`}>
            <Link className={` `} to={`/course/${course.slug}`}>
                <div className={`bg-accent-200 rounded-lg p-4 w-full h-80 shadow-xl relative max-w-10 mx-auto`}>
                    {
                        course.credits ? (<>
                            <img src={CreditsTag.default} alt="Credits" className='absolute z-10 -top-2 -right-2' />
                        </>) : (<></>)
                    }         
                    <div className="relative overflow-y-hidden h-full w-full">
                        {
                            course.image ? (<>
                                <img className="w-full h-32 rounded-md" src={course.image} alt={course.title} />
                            </>) : (
                                <div className='w-full h-32 rounded-md bg-color-100'></div>
                            )
                        }
                        <h2 className='text-lg text-slate-900 font-poppins font-black mt-2'>{course.title}</h2>
                        <div className='text-sm my-2 relative overflow-x-hidden overflow-y-hidden'>
                            <p className='text-slate-900'>{course.desc}</p>
                            <div className="select-none bg-gradient-to-b from-transparent via-transparent to-accent-200 w-full h-full absolute inset-0" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CourseGridElement;
