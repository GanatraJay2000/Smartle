import React, { useEffect, useState } from 'react';
import CoursesGrid from '../../molecules/CoursesGrid';
import { getCourses } from '../../../util/api';
import Alert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import CourseGridElement from '../../molecules/CourseGridElement';

const OurCourses = () => {
  const [courses, setCourses] = useState<any>(undefined);
  const [fail, setFail] = useState<any>(undefined);
  const isMobile = useMediaQuery('(max-width:1000px)');

    useEffect(() => {
    ( () => {
			try {
        var data = getCourses("extraShow", 'home', "=");
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
          <h2 className='font-black text-3xl md:text-5xl text-center'>Our Courses</h2>
          <p className='text-md md:text-xl text-center md:w-11/12 mx-auto mt-4 md:mt-8'>Unique global curriculum to helps young children acquire highly practical Life Skills. Content aligned to P21 framework (United States of America), Skillizen Olympiad Foundation (Singapore), National Education Policy 2021 (India)</p>
          {
            !isMobile ? (<CoursesGrid courses={courses} />) : (
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                navigation
                loop={true}
                autoplay={{ delay: 3500 }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  900: {
                    slidesPerView: 3,
                  },
                }}
                className="py-10"
              >
                {
                  courses.map((course:any, key:any) => {
                    return (
                      <SwiperSlide>
                        <div className="px-10">
                          <CourseGridElement width="w-52" course={course} key={key} />
                        </div>
                      </SwiperSlide>
                    );
                  })
                }
              </Swiper>
            )
          }
        </div>)
      }      
      {fail && <Alert severity="error">Something went wrong! ({fail})</Alert>}
    </div>
  );
}

export default OurCourses;
