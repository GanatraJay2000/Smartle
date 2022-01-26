import React from 'react';
import Transition from '../atom/Transition';
import CourseStackElement from './CourseStackElement';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

interface Props {
    courses: any;
}
const CoursesStack = ({ courses }: Props) => {
    let list = courses;
    return (
        <div className="my-20">
            <TransitionGroup component="div">
            {
                Object.keys(list as any).length > 0 && list?.map((item:any, idx:number) => {
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
        </div>
    );
}

export default CoursesStack;
