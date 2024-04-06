import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.png'
import '../index.css'
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import WorkoutSlider from '../components/workoutSlider';
import { workouts } from '../data';
import { FreeMode, Pagination } from "swiper/modules";
export default function Home() {
  const {title ,icon} =workouts
  return (

    <section className='bg-black'
    crosess
    crosessOffset='lg:translate-y-[5.25rem]'
    cusstomPaddings
    id='home'
    >
    

      <div className="container relative "> 
        <div className='relative z-1 max-w-[40rem] mx-auto text-center  lg:mb:[2rem]'>
      
          <img className='banner' src={Banner} alt="" />
          <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We are nutration',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We are excercises',
        1000,
        'We are online coaching',
        1000,
        'We are helath !',
        1000,
        'We are different !',
        3000
      ]}
      cursor={true}

      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'flex',color:'white' }}
      repeat={Infinity}
    />
        </div>
      </div>


<div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'>
  <img src={icon} alt="" />
  <h2 className='text-primary '>
   <span className='text-primary-400'>  {title}</span>
    
  <div>
    <WorkoutSlider />
  </div>
  </h2>

</div>

    </section>


   
  )
}
