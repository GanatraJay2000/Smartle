import Button from '@mui/material/Button';
import React from 'react';
import Modal from '@mui/material/Modal';

interface Props {
    course: any;
}
const Banner = ({ course }: Props) => {
    const [openVideo, setOpenVideo] = React.useState(false);
    const handleOpenVideo = () => setOpenVideo(true);
    const handleCloseVideo = () => setOpenVideo(false);

    return (<>
        <Modal
            open={openVideo}
            onClose={handleCloseVideo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"            
        >
            <div className="w-9/12 h-full py-10 mx-auto">
                <div className="rounded-xl md:p-5 bg-white h-full w-full relative">
                    <div onClick={handleCloseVideo} className="cursor-pointer absolute -top-5 -right-5 h-10 w-10 bg-red-600 text-white text-3xl rounded-full flex justify-center items-center">
                        &times;
                    </div>
                    <div className="bg-slate-300 h-full rounded-lg">                        
                        <iframe className="w-full h-full rounded-lg" src={course.videoBase+course.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </Modal>
        <div className="flex flex-wrap">
            <div className="w-1/2 pr-10">
                <h1 className="font-black text-3xl">{course.title}</h1>
                <p className="text-lg mt-4">{course.desc}</p>
                <div className="flex flex-wrap my-6">
                    <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-300"></div>
                    <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-300"></div>
                    <div className="px-4 mr-3 py-3 rounded-2xl w-32 bg-color-300"></div>
                </div>
                <h1 className="font-black text-xl">Learning Objectives</h1>
                <p className="text-lg mt-4">{course.objective}</p>
                <div className="flex gap-4">
                    <Button className='mt-12 px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Buy Course</Button>
                    <Button className='mt-12 px-14 py-2 text-white bg-color-400 font-bold rounded-xl'>Book Trial</Button>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-accent-200 rounded-md shadow-xl p-5 w-10/12 relative">
                    <div onClick={handleOpenVideo} className="absolute inset-5 rounded-md bg-gray-800 opacity-50 z-30"></div>
                    <button onClick={handleOpenVideo} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-slate-100 z-40 p-0 flex justify-center items-center">                        
                        <i className="bi bi-caret-right-fill text-slate-800 text-2xl"></i>
                    </button>
                    <img src={course?.image} className="rounded-md w-full" alt="" />
                </div>
            </div>          
        </div>        
    </>);
}

export default Banner;
