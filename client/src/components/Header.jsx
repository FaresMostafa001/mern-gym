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
    <Navbar className=' bg-primary pt-10	font-rubic nav
    '>
<Link   to='/home' className=' logo self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white;
'
>
    <span className='text-white px-20	' >Gymnasstics App</span>
     
     
</Link>
    
   
    <div className='flex flex-auto gap-3 md:order-5'>
      
          <NavbarToggle/>
    </div>
    <Navbar.Collapse className='links text-inherit '>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link className='navItem' to='/home'>Home </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link className='navItem' to='/about'>About us </Link>
        </Navbar.Link>

        
        <Navbar.Link active={path === '/Blog'} as={'div'}>
          <Link className='navItem' to='/Blog'>Join To Us </Link>
        </Navbar.Link>


        <Navbar.Link active={path === '/download'} as={'div'}>
          <Link className='navItem' to='/projects'>Download </Link>
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  )
}
