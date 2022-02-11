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
    return (
        <div className="my-20">
            {
                !isNull(courses) && (
                    <TransitionGroup component="div">
                        {
                            courses?.map((item:any, idx:number) => {
                                return (
                                    <CSSTransition
                                        timeout={500}
                                        classNames="fade"
                                        key={idx}
                                    >
                                        <CourseStackElement key={idx} course={item} />
                                    </CSSTransition>
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
