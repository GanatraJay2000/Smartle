import React, { useEffect, useState } from 'react';
import GradientBlobT from '../components/atom/GradientBlobT';
import CoursesStack from '../components/molecules/CoursesStack';
import { getCourses } from '../util/api';
import { isNull } from '../util/helpers';
import { TopGrad } from '../util/resources/vector';

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
				var data =  getCourses();
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
      let lclCourses = [...ogCourses];   
      setCourses([]);
      if (filterAge === 'All') {
        setCourses(lclCourses);
        setUpdateCourses(updateCourses + 1)
      } else {
        (async () => {
          let newlist = await lclCourses?.filter(
            (course: any) => course.age?.toLowerCase().includes(filterAge?.toLowerCase())
          )
          lclCourses = newlist;
          setCourses(lclCourses);
          setUpdateCourses(updateCourses + 1)
        })();
      }
    }
  }, [filterAge]);

  return (<>
    <GradientBlobT />
    <div className="md:w-8/12 mx-auto pb-20 relative z-10">
      <h2 className="text-3xl font-black pt-40 text-center">Explore our courses</h2>
      <p className="px-3 md:px-3 text-lg md:text-xl text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id duis eu quis egestas. Turpis at fusce a vel aenean urna, eget nulla. Id duis eu quis egestas. Turpis at fusce a vel aenean urna, eget nulla.</p>
      <div className="filter mt-16">
        <div className="hidden md:block">
          <div className="md:w-2/3 shadow-lg  mx-auto flex flex-wrap items-stretch  border-0 md:border-2 border-neutral-300 rounded-lg">
            <div className="md:w-9/12">          
              <input type="text" id="filter-input"
                className="w-full border-2 md:border-0 border-neutral-300  box-content shadow-none outline-0 rounded-lg px-5 text-neutral-400 font-semibold -z-10 h-full"
                onKeyDown={function(e){if (e.key === 'Enter') setFilterValue((e.target as any).value)}}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-color-400 scale-110 text-xl font-bold md:w-3/12 px-5 py-2 md:px-auto text-white rounded-lg'    
              onClick={()=>setFilterValue((document.getElementById('filter-input') as HTMLInputElement)?.value as string)}
            >
              Search
            </button>
          </div>    
        </div>
        <div className="md:hidden">
          <div className="w-full text-center">
            <input type="text" id="filter-input2"
              placeholder="Filter"
                className="mb-3 mx-auto  border border-slate-500 w-10/12 rounded-lg px-5 py-2"
                onKeyDown={function(e){if (e.key === 'Enter') setFilterValue((e.target as any).value)}}
            />
          </div>
          <div className="text-center">
          <button
              type='submit'
              className='bg-color-400 mx-auto text-xl font-bold  px-10 py-2 w-10/12 text-white rounded-lg'    
              onClick={()=>setFilterValue((document.getElementById('filter-input2') as HTMLInputElement)?.value as string)}
            >
              Search
            </button>
            </div>
        </div>
      
      </div>
      <div className=" mt-10 mb-5">
        <div className="flex flex-wrap justify-center w-10/12 mx-auto">
          <div
          onClick={()=>{setFilterAge('All')}}
          className={`${filterAge === 'All' ? 'dark:text-white border-2 border-accent-400 bg-accent-400':'bg-white border-2 border-accent-400'} w-full sm:w-5/12 md:w-auto mx-auto text-center text-slate-900  my-2 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>All</div>
          <div
          onClick={()=>{setFilterAge('8-10')}}
          className={`${filterAge === '8-10' ? 'dark:text-white border-2 border-accent-400 bg-accent-400':'bg-white border-2 border-accent-400'} w-full sm:w-5/12 md:w-auto mx-auto text-center text-slate-900  my-2 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>8-10 Yrs</div>
          <div
          onClick={()=>{setFilterAge('11-12')}}
          className={`${filterAge === '11-12' ? 'dark:text-white border-2 border-accent-400 bg-accent-400':'bg-white border-2 border-accent-400'} w-full sm:w-5/12 md:w-auto mx-auto text-center text-slate-900  my-2 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>11-12 Yrs</div>
          <div
          onClick={()=>{setFilterAge('13-14')}}
          className={`${filterAge === '13-14' ? 'dark:text-white border-2 border-accent-400 bg-accent-400':'bg-white border-2 border-accent-400'} w-full sm:w-5/12 md:w-auto mx-auto text-center text-slate-900  my-2 cursor-pointer px-6 py-1 rounded shadow-lg font-bold`}>13-14 Yrs</div>
        </div>
      </div>
      {/* {
        courses && updateCourses && (
          <CoursesStack courses={courses} />
        )
      } */}
    </div>
  </>);
}

export default Courses;
