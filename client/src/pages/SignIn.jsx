import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function SignIn() {
  return (
    <div className='min-h-screen mt-20'>
      {/* left */}
    <div className=' flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>


      <div className='flex-1'>

      
    <Link  to='/' className='self-center whitespace-nowrap  sm:text-xl font-semibold dark:text-white text-4xl'
>
    <span className='px-2 py-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg text-white terct' >Gym</span>
     App
    </Link>
    <p className='text-sm mt-5'>
      this is a gymansitcs app that will help you have a better healthy life
      you can sign up with ypur email and password
      or with Google.
    </p>
    </div>
      

      {/* right */}
      <div className='flex-1'>
        <div>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='your user name?' />
              <TextInput 
                type='text'
                placeholder='UserName'
                id='username'
              />
            </div>

            <div className=''>
              <Label value='your Email?' />
              <TextInput 
                type='text'
                placeholder='Email?'
                id='email'
              />
            </div>

            <div className=''>
              <Label value='your user password?' />
              <TextInput 
                type='password'
                placeholder='Password?'
                id='password'
              />
            </div>

            <Button gradientDuoTone='purpleToBlue' type='submit'>
              SignUp
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-2'>
            <span>Have an acoount?</span>
            <Link to='./sign-in' className=''>
              Sign In now!
              </Link>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
