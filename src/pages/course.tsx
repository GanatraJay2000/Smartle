import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GradBlobTRSm from '../components/atom/GradBlobTRSm';
import { Banner, StatsCard, Curriculum, CustTimeline } from '../components/sections/course';
import CourseCTA from '../components/sections/course/CourseCTA';
import Instructor from '../components/sections/course/Instructor';
import { getCourse, getInstructor } from '../util/api';
import { isNull } from '../util/helpers';

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<any>(undefined);
  const [fail, setFail] = useState<string | undefined>(undefined);
  const [instructor, setInstructor] = useState<any>(undefined);

  useEffect(() => {
    ( () => {
			try {
        var data = getCourse(id);
				setCourse(data);				
			} catch (e: any) {
				setFail(e.message);
			}
		})();
  }, [])

  useEffect(() => {
    if (isNull(course)) return;
    ( () => {
      try {        
        var data = getInstructor(course.instructor_id);        
				setInstructor(data);
			} catch (e: any) {
				setFail(e.message);
			}
		})();
  }, [course])

  return (<>
    <GradBlobTRSm />
    {
      !isNull(course) && !isNull(instructor) ? (<>
          <div className="mx-auto w-10/12 my-12 ">
            <Banner course={course} />
          <StatsCard
            stats={course.stats}
            text={course.statsText} />
          <Curriculum curr={course.curriculum} />   
          <CustTimeline list={course.timeline} />
          </div>
        <Instructor instructor={instructor} />
        <CourseCTA />
        </>) : (
        <div style={{ marginTop: '40vh', textAlign: 'center' }}>
            <CircularProgress color="secondary" />            
            <div className="w-full">
              <div className="my-10">Looks like there is some problem!</div>
              <Link to={'/courses'} className='px-14 py-4 text-white bg-color-400 font-bold rounded-xl'>Explore Other Courses</Link>
            </div>
        </div>
        )
    }    
  </>);
}

export default Course;
