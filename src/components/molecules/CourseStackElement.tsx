import React from 'react';
import { Link } from 'react-router-dom';
import { isNull } from '../../util/helpers';
import { Clock, Card } from '../../util/resources';

interface Props{
    course: any;    
}

const CourseStackElement = ({ course }: Props) => {    
    return (<>
        {
            !isNull(course) && (
            <Link to={`/course/${course.slug}`} className="my-10 relative bg-accent-200 p-5 shadow-xl rounded-lg flex flex-wrap ">                
                    <div className="w-1/3">
                        <img className="w-full rounded-lg" src={course.image} alt="" />
                    </div>
                    <div className="w-2/3 pl-7">
                        <div className="font-semibold mb-1">Age: {course.age}</div>
                        <div className="font-bold text-3xl mb-2">{course.title}</div>
                        <div className="mb-3">{course.desc}</div>
                        <div className="flex flex-wrap mb-3">
                            <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-100"></div>
                            <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-100"></div>
                            <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-100"></div>
                        </div>
                        <div className="mb-1 flex items-center">
                            <img className="w-10 h-10 mr-5" src={Clock.default} alt="" />
                            <div className="">Duration: {course.duration}</div>            
                        </div>
                        <div className="mb-3 flex items-center">
                            <img className="w-10 h-10 mr-5" src={Card.default} alt="" />            
                            <div className="">Instructor/Coach: {course.instructor}</div>
                        </div>
                    </div>
                    <div className="cost absolute bottom-7 right-10  ">
                        <p>Cost:</p>
                        <p className='text-3xl text-color-400 font-black'>
                            <span className='text-5xl'>{course.cost}</span>
                            <span className='text-2xl'>$</span>            
                        </p>
                    </div>                
            </Link>       
            )
        }        
    </>);
}

export default CourseStackElement;
