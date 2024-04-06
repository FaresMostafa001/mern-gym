import React from 'react';
import {workouts} from '../data'
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import '../workoutSlider.css'
import { Navigation, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from "react-icons/rx";

import { FreeMode } from 'swiper/modules';

const WorkoutSlider = () => {
  const {programs} =workouts
  return <Swiper slidesPerView={4} navigation={true}  breakpoints={{
    340: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  modules={[FreeMode, Pagination]} className='workoutSlider' spaceBetween={32}>
  {programs.map((programs,idx) =>{
    const{image ,name}=programs;
    return(
      <SwiperSlide  className='flex flex-col gap-6 mb-10 group relative shadow-lg text-white rounded-xl px-50 py-10 h-[250px] w-[100px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"' key={idx}>
        <img className='w-full h-full object-cover'src={image} alt="" />
        <div className='absolute inset-0 bg-cover bg-center'>
          <div className='font-primary font-semibold text-sm text-neutral-500'>{name}</div>
          <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />

        </div>
      </SwiperSlide>
    )
  })}
  </Swiper>;
};

export default WorkoutSlider;