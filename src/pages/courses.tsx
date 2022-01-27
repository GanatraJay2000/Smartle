import React, { useEffect, useState } from 'react';
import GradientBlobT from '../components/atom/GradientBlobT';
import CoursesStack from '../components/molecules/CoursesStack';
import { getCourses } from '../util/api';
import { isNull } from '../util/helpers';

const Courses = () => {
  const [courses, setCourses] = useState<any>(undefined);
  const [ogCourses, setOgCourses] = useState<any>(undefined);
  const [updateCourses, setUpdateCourses] = useState(1);
  const [fail, setFail] = useState(undefined);
  const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
  const [filterAge, setFilterAge] = useState<string | undefined>(undefined);

  useEffect(() => {
    ( () => {
			try {
				var data =  getCourses('show', '1', '=');
				setCourses(data);
				setOgCourses(data);
			} catch (e: any) {
				setFail(e.message);
			}
		})();
  }, [])

  useEffect(() => {
    if (!isNull(courses) && !isNull(ogCourses)) {      
      let lclCourses = [ ...ogCourses ];
      if (!isNull(filterValue)) setCourses(lclCourses);            
      (async () => {
        let newlist  = await lclCourses?.filter(
          (course: any) => course.title?.toLowerCase().includes(filterValue?.toLowerCase())
          )      
        lclCourses = newlist;        
        setCourses(lclCourses);
        setUpdateCourses(updateCourses+1)
      })();
    }
  }, [filterValue]);
  

  useEffect(() => {
    if (!isNull(filterAge) && !isNull(ogCourses)) {
      let lclCourses = [ ...ogCourses ];      
      (async () => {
        let newlist = await lclCourses?.filter(
          (course: any) => course.age?.toLowerCase().includes(filterAge?.toLowerCase())
          )
          lclCourses = newlist;          
        setCourses(lclCourses);
        setUpdateCourses(updateCourses + 1)
      })();
    }
  }, [filterAge]); 


  return (<>
    <GradientBlobT />    
    <div className="md:w-8/12 mx-auto pb-20">
      <h2 className="text-3xl font-black pt-40 text-center">Explore our courses</h2>
      <p className="text-xl text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id duis eu quis egestas. Turpis at fusce a vel aenean urna, eget nulla. Id duis eu quis egestas. Turpis at fusce a vel aenean urna, eget nulla.</p>
      <div className="filter mt-16">
        <div className="w-2/3 mx-auto flex items-stretch  border-2 border-neutral-300 rounded-lg">
          <div className="w-9/12">          
            <input type="text" id="filter-input"
              className="box-content border-0 shadow-none outline-0 rounded-lg px-5 text-neutral-400 font-semibold -z-10 h-full w-full"
              onKeyDown={function(e){if (e.key === 'Enter') setFilterValue((e.target as any).value)}}
            />
          </div>
          <button
            type='submit'
            className='bg-color-400 scale-110 text-xl font-bold w-3/12 text-white py-2 rounded-lg'    
            onClick={()=>setFilterValue((document.getElementById('filter-input') as HTMLInputElement)?.value as string)}
          >
            Search
          </button>
        </div>
      </div>
      <div className=" my-5">
        <div className="flex justify-center mx-auto">
          <div
          onClick={()=>{setFilterAge('8-10')}}
          className={`${filterAge === '8-10' ? 'bg-accent-400 border-2 border-accent-400':'bg-white border-2 border-accent-400'} mx-5 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>8-10 Yrs</div>
          <div
          onClick={()=>{setFilterAge('11-12')}}
          className={`${filterAge === '11-12' ? 'bg-accent-400 border-2 border-accent-400':'bg-white border-2 border-accent-400'} mx-5 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>11-12 Yrs</div>
          <div
          onClick={()=>{setFilterAge('13-14')}}
          className={`${filterAge === '13-14' ? 'bg-accent-400 border-2 border-accent-400':'bg-white border-2 border-accent-400'} mx-5 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>13-14 Yrs</div>
        </div>
      </div>
      {
        courses && updateCourses && (
          <CoursesStack courses={courses} />
        )
      }
    </div>
  </>);
}

export default Courses;
