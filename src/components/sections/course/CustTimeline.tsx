import React, { useState } from 'react'
import { isNull } from '../../../util/helpers';
import Transition from '../../atom/Transition';
interface Props{
  list: any;
}



const CustTimeline = ({ list }: Props) => {

  const [activeDot, setActiveDot] = useState<string>((Object.keys(list) as any)[0] as string);
  return <div className='pb-1 relative mb-40'>
    <h1 className="text-4xl font-black text-center mt-32">Learning Journey</h1>
    <div className="overflow-x-scroll md:overflow-x-auto overflow-y-hidden  rounded-t-xl md:rounded-xl mt-16">
      <div style={{minWidth:'750px'}} className="relative timeline py-5 bg-accent-200 w-full h-60 md:pb-16 rounded-t-xl md:rounded-3xl shadow-2xl flex justify-center items-center">         
    <div className={`w-20 timeline-line line-up`}></div>
      {
        !isNull(list) ? (<>
          {
            Object.entries(list).map((item: any, itemIdx: number) => {
              let title = item[0];
              let desc = item[1];
              let myDir = ["up", "translate-y-10", "-top-28"];
              if (itemIdx % 2 == 0) myDir = ["down", "-translate-y-10", "-top-8"];
              let showLine = "transition-all hidden";
              if (title === activeDot) showLine = "transition-all ";                
              return (<React.Fragment key={itemIdx}>
                <div onClick={() => setActiveDot(title)}
                  className={`timelinePoint h-5 w-5 bg-color-400 rounded-full ${myDir[1]} cursor-pointer relative`}
                >
                  <div className={`absolute ${showLine} truncate z-50 px-2 left-3 -translate-x-1/2 ${myDir[2]} font-semibold`}>
                      {title}
                  </div>
                  <div style={{transform: 'translateX(-6px) rotate(90deg)'}} className={`w-32 ${showLine} timeline-line top-24 -left-12 absolute`}></div>
                </div>
                <div className={`w-20 timeline-line line-${myDir[0]}`}></div>
              </React.Fragment>);              
            })
          }                                        
        </>) : (<>
          <div className="h-5 w-5 bg-color-400 rounded-full"></div>               
        </>)
      }     
      </div>
    </div>      
    <div className="relative md:absolute top-full -translate-y-12 left-1/2 -translate-x-1/2 bg-color-200 rounded-b-xl md:rounded-3xl shadow-2xl md:w-10/12 py-5">
        <Transition index={list[activeDot]}>
            <div className="h1 text-center font-bold text-2xl">{activeDot}</div>
            <div className="text-center px-5 md:px-16 mt-3 pb-3 font-medium">{list[activeDot]}</div>
        </Transition>
      </div>
  </div>;
}

export default CustTimeline;


/* 
<div className="absolute top-full -translate-y-24 left-1/2 -translate-x-2/4 right-0 bg-color-200 rounded-3xl shadow-2xl w-10/12 py-5">
        <Transition index={list[activeDot]}>
            <div className="h1 text-center font-bold text-2xl">{activeDot}</div>
            <div className="text-center px-16 mt-3 pb-3 font-medium">{list[activeDot]}</div>
        </Transition>
      </div>

*/