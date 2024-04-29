import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About';
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import BMICalculator from './pages/BMICalculator'
import Blog from './pages/Blog'
export default function App() {
  
  return (
    
   <BrowserRouter>
   <Header />
   <Routes>
   <Route path='/' element={<Home />} ></Route>

    <Route path='/home' element={<Home />} ></Route>
    <Route path='/about' element={<About />} ></Route>
    <Route path='/bmiCalculator' element={<BMICalculator />} ></Route>
    <Route path='/Blog' element={<Blog />} ></Route>
    <Route path='/sign-in' element={<SignIn />} ></Route>
    <Route path='/sign-up' element={<SignUp />} ></Route>
    <Route path='/dashboard' element={<Dashboard />} ></Route>
    <Route path='/projects' element={<Projects />} ></Route>


   </Routes>
   </BrowserRouter>
  )
  }