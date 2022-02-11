import React, { useState } from 'react'
import Transition from '../../atom/Transition';
interface Props{
  list: any;
}

const CustTimeline = ({list}:Props) => {
  const [activeDot, setActiveDot] = useState<number>(0);    
  return <div>
    <h1 className="text-4xl font-black text-center mt-20">Learning Journey</h1>
    <div className="relative timeline mt-16 mb-40 py-5 bg-accent-200 w-full h-60 pb-16 rounded-3xl shadow-2xl flex justify-center items-center">         
    <div className={`w-20 timeline-line line-up`}></div>
      {
        list.length > 1 ? (<>
          {
            list.map((item: string, itemIdx: number) => {
              let myDir = ["up", "translate-y-10", "-top-10"];
              if (itemIdx % 2 == 0) myDir = ["down", "-translate-y-10", "-top-8"];
              let showLine = "transition-all hidden";
              if (itemIdx === activeDot) showLine = "transition-all ";                
              return (<React.Fragment key={itemIdx}>
                <div onClick={() => setActiveDot(itemIdx)}
                  className={`timelinePoint h-5 w-5 bg-color-400 rounded-full ${myDir[1]} cursor-pointer relative`}
                >
                  <div className={`absolute ${showLine} w-20 -left-5 ${myDir[2]} font-semibold`}>
                    Week {itemIdx + 1}
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
      <div className="absolute -bottom-24 left-1/2 -translate-x-2/4 right-0 bg-color-200 rounded-3xl shadow-2xl h-40 w-10/12">
        <Transition index={list[activeDot]}>            
            <div className="h1 text-center mt-5 font-bold text-2xl">Week {activeDot + 1}</div>
            <div className="text-center px-24 mt-3 font-medium">{list[activeDot]}</div>            
        </Transition>
      </div>
    </div>
  </div>;
}

export default CustTimeline;
