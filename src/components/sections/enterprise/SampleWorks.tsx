import React, { useEffect, useState } from 'react';
import { getCourses } from '../../../util/api';
import CoursesStack from '../../molecules/CoursesStack';

const SampleWorks = () => {
    const [courses, setCourses] = useState<any>(undefined);
    const [fail, setFail] = useState(undefined);

    useEffect(() => {
    ( () => {
			try {
                var data = getCourses('show', '1', '=');
                console.log(data);
				setCourses(data);				
			} catch (e: any) {
				setFail(e.message);
			}
		})();
      }, [])
    
    return (
        <div className='my-16 mx-auto w-9/12'>
            <h1 className="mb-10 text-center text-3xl font-extrabold">Sample Works</h1>
            <CoursesStack courses={courses} />
        </div>
    );
}

export default SampleWorks;
