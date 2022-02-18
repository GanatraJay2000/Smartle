import React from 'react';
import { isNull } from '../../../util/helpers';
interface Props{
    curr: any;
}
const Curriculum = ({curr}:Props) => {
  return (<>
    <div className='mb-20'>
      <h1 className="text-4xl font-black text-center mb-20">Course Curriculum</h1>
      {
        !isNull(curr) && curr.map((cur:any, idx:number) => {
          return (
            <div className='mb-5' key={idx}>
              <span className='font-extrabold'>{String(idx + 1).padStart(2, '0')}:&nbsp;&nbsp; </span>{cur}
            </div>
          );
        })
      }      
    </div>
  </>);
}

export default Curriculum;
