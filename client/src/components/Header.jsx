import { Button, Navbar, NavbarCollapse, NavbarToggle, TextInput,Label } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch}from 'react-icons/ai'
import {FaCalculator, FaMoon,FaInfo,FaHome,FaBlog,FaDumbbell} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import './header.css'
export default function Header() {
    const path =useLocation().pathname
  return (
    <Navbar className='border-b-2 '>
<Link  to='/home' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
>
    <span className='px-1 py-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg text-white' >Gym</span>
     App
     <img className='logo1' src={Logo}></img>
</Link>
    <form>
        <TextInput type='text' 
        placeholder='Search ..'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
    </form>
   
    <div className='flex gap-2 md:order-5'>
        <Button className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill>
            <FaMoon />
        </Button>
        <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
          <NavbarToggle/>
    </div>
    <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/home'>Home <FaHome /></Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About <FaInfo /></Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/BMICalculator'} as={'div'}>
          <Link to='/BMICalculator'>Free BMICalculator <FaCalculator /></Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/Blog'} as={'div'}>
          <Link to='/Blog'>Blog <FaBlog /></Link>
        </Navbar.Link>


        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Exercises <FaDumbbell /></Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/dashboard'} as={'div'}>
          <Link to='/dashboard'>dashboard </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
