import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.png'
import Cards from '../components/Cards'
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

    <section className='bg-primary'
    crosess
    crosessOffset='lg:translate-y-[5.25rem]'
    cusstomPaddings
    id='home'
    >
    

      <div className=' flex z-1 max-w-[500rem] h-100   lg:mb:[2rem] px-40 py-30 '>


        <h1 className='py-40 text-4xl font-h1 slogan '>Master your skill by <br /> your personal <br /> trainer coach</h1>
        <div className=' flex '><img className='' src={Banner} alt="" /></div>

      </div>


    


      {/* الجزء التاني */}

      








    </section>


   
  )
}
