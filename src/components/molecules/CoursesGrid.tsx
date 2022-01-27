import React from 'react';
import CourseGridElement from './CourseGridElement';

interface Props{
    courses: any;
}

const CoursesGrid = ({courses}:Props) => {
    return (
        <div className="mx-auto">
            <div className='w-10/12 my-10 mx-auto grid grid-flow-row auto-rows-max gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-4 items-stretch justify-center'>
                {
                    courses.map((course:any, key:any) => {
                        return (                        
                            <CourseGridElement course={course} key={key} />                        
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CoursesGrid;
