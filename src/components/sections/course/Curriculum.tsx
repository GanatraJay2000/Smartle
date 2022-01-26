import React from 'react';
import { isNull } from '../../../util/helpers';
interface Props{
    curr: any;
}
const Curriculum = ({curr}:Props) => {
  return (<>
    <div>
      <h1 className="text-4xl font-black text-center mb-20">Course Carriculum</h1>
      {
        !isNull(curr) && curr.map((cur:any, idx:number) => {
          return (
            <div className='mb-8' key={idx}>
              <span className='font-extrabold'>Week {String(idx + 1).padStart(2, '0')}: </span>{cur}
            </div>
          );
        })
      }
      <div className="">
        <span></span>
      </div>
    </div>
  </>);
}

export default Curriculum;
