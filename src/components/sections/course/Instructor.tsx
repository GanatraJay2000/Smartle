import Rating from '@mui/material/Rating';
import React from 'react';
import GradientBlobBL from '../../atom/GradientBlobBL';
import PopOutCircle from '../../atom/PopOutCircle';
import { RatingStar, RatingStarEmpty } from '../../../util/resources'
import styled from '@emotion/styled';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

interface Props{
    instructor: any;
}

const Instructor = ({instructor}:Props) => {
    return (<div className=''>
        <h1 className="text-4xl font-black text-center mb-20">Meet your Instructor</h1>
        <div className='mt-30 pb-32 flex flex-wrap gap-5 overflow-y-hidden'>
            <div className="w-4/12 relative">
                <GradientBlobBL classes="-top-8 left-0" />
                <PopOutCircle circleShadow='' circleBg='transparent' image={instructor.image} imagePos="0% 35%" />
            </div>
            <div className="w-7/12 my-10 ">
                <h1 className="font-black text-xl">Instructor</h1>
                <h1 className=" text-3xl my-1">{instructor.name}</h1>
                <p className='text-xl my-5'>" {instructor.desc}</p>
                <div className="flex items-center my-3">
                    <div className="mr-3">
                        <StyledRating
                            name="customized-color"
                            value={instructor.stars}
                            max={instructor.stars}
                            readOnly 
                            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            icon={<img alt="" src={RatingStar.default} />}
                            emptyIcon={<img alt="" src={RatingStarEmpty.default} />}
                        />
                    </div>
                    <div className="text-lg ">{instructor.reviews} Total Reviews </div>
                </div>
                <p className="text-lg "><span className='font-bold font-poppins'>Instructor availability:</span> {instructor.availability}</p>
            </div>
        </div>        
    </div>);
}

export default Instructor;
