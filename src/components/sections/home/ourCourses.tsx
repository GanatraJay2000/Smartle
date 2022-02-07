import React, { useEffect, useState } from 'react';
import CoursesGrid from '../../molecules/CoursesGrid';
import { getCourses } from '../../../util/api';
import Alert from '@mui/material/Alert';

const OurCourses = () => {
  const [courses, setCourses] = useState<any>(undefined);
  const [fail, setFail] = useState<any>(undefined);

    useEffect(() => {
    ( () => {
			try {
        var data = getCourses();        
				setCourses(data);				
			} catch (e: any) {
				setFail(e.message);
			}
		})();
    }, [])
  
  return (
    <div className=''>
      {
        courses && (<div className='relative z-10'>
          <h2 className='font-black text-4xl md:text-5xl text-center'>Our Courses</h2>
          <p className='text-lg md:text-xl text-justify md:text-center w-11/12 mx-auto mt-8'>Unique global curriculum to helps young children acquire highly practical Life Skills. Content aligned to P21 framework (United States of America), Skillizen Olympiad Foundation (Singapore), National Education Policy 2021 (India)</p>
          <CoursesGrid courses={courses} />
        </div>)
      }      
      {fail && <Alert severity="error">Something went wrong! ({fail})</Alert>}
    </div>
  );
}

export default OurCourses;
