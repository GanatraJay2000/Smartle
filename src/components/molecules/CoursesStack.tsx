import React from 'react';
import CourseStackElement from './CourseStackElement';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { isNull } from '../../util/helpers';

interface Props {
    courses: any;
}
const CoursesStack = ({ courses }: Props) => {   
    console.log(courses);
    return (
        <div className="mt-5 md:mt-20 mb-20">
            {
                !isNull(courses) && (
                    <TransitionGroup component="div" className="flex flex-wrap">
                        {
                            courses?.map((item:any, idx:number) => {
                                return (
                                    <div key={idx} className="w-full sm:w-1/2 md:w-full">
                                        <CSSTransition
                                            timeout={500}
                                            classNames="fade"
                                            key={idx}
                                        >
                                            <CourseStackElement key={idx} course={item} />
                                        </CSSTransition>
                                    </div>
                                )
                            })
                        }            
                    </TransitionGroup>
                )
            }            
        </div>
    );
}

export default CoursesStack;
