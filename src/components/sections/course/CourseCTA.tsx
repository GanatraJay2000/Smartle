import Button from '@mui/material/Button';
import React from 'react';
import RegisterInterestModal from '../../organisms/RegisterInterestModal';
interface Props{
    courseId: any;
}
const CourseCTA = ({courseId}:Props) => {
    const [openInterest, setOpenInterest] = React.useState(false);
    const handleOpenInterest = () => setOpenInterest(true);
    const handleCloseInterest = () => setOpenInterest(false);

    return (
        <div className='bg-accent-200 pt-20 pb-16'>
            <div className="w-10/12 mx-auto">
                <div className="text-center pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tempore alias impedit quasi eligendi, dolorum ullam non provident quod </div>
                <div className="flex justify-center gap-4">
                    <RegisterInterestModal courseId={courseId} openInterest={openInterest} handleCloseInterest={handleCloseInterest} />
                    <Button
                        onClick={handleOpenInterest} 
                        className='px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Register Your Interest</Button>
                    {/* <Button className='px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Buy Course</Button>
                    <Button className='px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Book Trial</Button> */}
                </div>
            </div>            
        </div>
    );
}

export default CourseCTA;
