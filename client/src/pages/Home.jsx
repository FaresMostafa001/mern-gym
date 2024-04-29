import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.png'
import Cards from '../components/Cards'
import Rect from '../assets/rect.png'
import Rectg from '../assets/rectg.png'
import Screens from'../assets/screens.png'
import Team from '../assets/team.png'
import '../index.css'
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from "swiper/react";
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import WorkoutSlider from '../components/workoutSlider';
import { workouts } from '../data';
import { FreeMode, Pagination } from "swiper/modules";
export default function Home() {
  
  const {title ,icon} =workouts
  return (

    <section className=' home bg-primary grid gap-2  lg:items-center max-lg:items-center md:items-center md:text-left md:items-center+text-left'

    >
    
    <div className='gird lg:grid-cols-2'>

   

      <div className='  '>


        <h1 className='  slogan mb-2 font-h1 '>Master your skill by your personal  trainer coach</h1>

      </div>


      <div>
      <img className='logo   ' src={Banner} alt="" />

      </div>

      </div>
    


      {/* الجزء التاني */}

     




<Home2 />
<Home3 />
<Home4 />


    </section>

    

  )

}
