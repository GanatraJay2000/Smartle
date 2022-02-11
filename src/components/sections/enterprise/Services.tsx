import React from 'react';
import { ListIcon1, ListIcon2, ListIcon3, ListIcon4, ListIcon5 } from '../../../util/resources'
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const slideImages = [
  '/images/courses/cs.png',
  '/images/courses/dl.png',
  '/images/courses/fl.png',
  '/images/courses/mew.png'
];

const Services = () => {  
  const services = [
    {
      icon: ListIcon1,
      idx: '01',
      text: 'Configure industry leading Learning Management Systems (LMS) for schools and enterprise'
    },
    {
      icon: ListIcon2,
      idx: '02',
      text: 'On premise and cloud deployments'
    },
    {
      icon: ListIcon3,
      idx: '03',
      text: 'Organize and simplify your training and learning process from course enrollment to training completion'
    },
    {
      icon: ListIcon4,
      idx: '04',
      text: 'SCORM complaint  content development.'
    },
    {
      icon: ListIcon5,
      idx: '05',
      text: 'Rich customizable library available for STEM content with level one, two and three interaction model for K-12 students'
    },
  ];

  // const slideProperties = {    
  //   scale: 0.4,
  //   indicators: i => (<div className="indicator">{i + 1}</div>)
  // }
    return (<div className='my-20'>
      <h1 className="text-3xl font-extrabold text-center my-10">Services Offered</h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 bg-slate-100 py-5 pr-5 shadow-xl rounded-r-3xl">
          <div className="bg-contrastAccent-200 w-full flex justify-center items-center h-full px -5 rounded-r-3xl">
            <div className="w-4/5 rounded-3xl">
              <div className="">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  pagination={{clickable: true,}}
                  loop={true}
                  autoplay={{ delay: 3500 }}
                  className="pb-6"
                >
                  <SwiperSlide>
                    <img src={slideImages[0]} className='w-full h-full  rounded-lg' alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slideImages[1]} className='w-full h-full  rounded-lg' alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slideImages[2]} className='w-full h-full  rounded-lg' alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slideImages[3]} className='w-full h-full  rounded-lg' alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>          
        </div>
        <div className="w-1/2">
          <div className="w-8/12 ml-20 flex flex-wrap items-center">
            {
              services.map((service, idx) => {
                let marginClass = "mb-8";
                if (idx === services.length - 1) marginClass = "mb-0";
                return (
                  <React.Fragment key={idx}>
                    <div className={`${marginClass} w-1/12 relative flex justify-center`}>
                      <div className="text-slate-900 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold">{service.idx}</div>
                      <img className='scale-150 -translate-y-1' src={service.icon} alt="" />
                    </div>
                    <div className={`${marginClass} ml-10 w-9/12`}>{service.text}</div>
                  </React.Fragment>
                )
              })
            }            
          </div>
        </div>
      </div>
  </div>);
}

export default Services;
