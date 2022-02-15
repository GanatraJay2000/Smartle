import React, { useEffect, useState } from 'react';
import { getCourses } from '../../../util/api';
import { isNull } from '../../../util/helpers';
import CoursesGrid from '../../molecules/CoursesGrid';
import CoursesStack from '../../molecules/CoursesStack';

const SampleWorks = () => {
    const [courses, setCourses] = useState<any>(undefined);
    const [fail, setFail] = useState(undefined);

    useEffect(() => {
    ( () => {
			try {
                var data = getCourses('home', true, '=');
                console.log(data);
				setCourses(data);
			} catch (e: any) {
				setFail(e.message);
			}
		})();
      }, [])
    
    return (
        <div className='my-16 mx-auto md:w-9/12'>
            <h1 className="mb-10 text-center text-3xl font-extrabold">Sample Works</h1>
            {/* <CoursesStack courses={courses} /> */}
            {
                !isNull(courses) && (<CoursesGrid elementWidth='sm:w-1/2 md:w-1/3' color="contrastAccent-200" courses={courses} />)
            }
        </div>
    );
}

export default SampleWorks;
