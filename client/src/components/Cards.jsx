import React from 'react'
import './styles/Cards.css' 
import  Workouts   from '../assets/Workouts.png'
import { FaLink ,FaDumbbell,FaPlus,FaArrowCircleRight } from 'react-icons/fa'
function Cards() {
  return (
    <div className='Cards flex'>
        <section className='left-section flex'>
<button className='active'>Excercises</button>       
<button>Nutration Plans</button>       
<button>Online Coaching</button>       
<button>fitness</button>       
<button>Offers</button>       


</section>


        <section className=' right-section flex'>
        {['aa','bb','cc'].map((item)=>
        {
            return(
                <article key={item} className='card '>
                <img width={400}  src={Workouts} alt="" />
                <div width={500} className="box" >
                    <h1 className='title'>title</h1>
                    <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quaerat ipsam, ea obcaecati dignissimos vitae ad vero, est, eveniet placeat molestias minus. Facilis aliquid aut provident veritatis voluptatem deserunt velit?</p>
                    <div className='flex icons'>
                        <FaLink className='link' />
                       <div className='dumbbell'> <FaDumbbell /></div>
                        <a href=''>more..</a>
                        <span><FaArrowCircleRight /></span>
                    </div>
                </div>
                </article>  
            )
        })

  }

  </section>
    </div>
  )
}

export default Cards