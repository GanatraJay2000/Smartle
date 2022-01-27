import React, { useEffect, useState } from 'react';
import CoursesGrid from '../../molecules/CoursesGrid';
import { Fl, Dl, Mew, Cs } from '../../../util/resources';
import { getCourses } from '../../../util/api';
import Alert from '@mui/material/Alert';

const OurCourses = () => {
  const [courses, setCourses] = useState<any>(undefined);
  const [fail, setFail] = useState<any>(undefined);

    useEffect(() => {
    ( () => {
			try {
        var data = getCourses();
        console.log(data);
				setCourses(data);				
			} catch (e: any) {
				setFail(e.message);
			}
		})();
    }, [])
  
  return (
    <div className=''>
      {
        courses && (<>
          <h2 className='font-black text-5xl text-center'>Our Courses</h2>
          <p className='text-xl text-center w-11/12 mx-auto mt-8'>Unique global curriculum to helps young children acquire highly practical Life Skills. Content aligned to P21 framework (United States of America), Skillizen Olympiad Foundation (Singapore), National Education Policy 2021 (India)</p>
          <CoursesGrid courses={courses} />
        </>)
      }      
      {fail && <Alert severity="error">Something went wrong! ({fail})</Alert>}
    </div>
  );
}

export default OurCourses;
