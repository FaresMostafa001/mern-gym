import React from 'react'
import { Footer, FooterLink } from "flowbite-react";
import { Link } from 'react-router-dom';
export default  function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-700'>
        <div>
            <div>
                <div><Link  to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
>
    <span className='px-2 py-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-lg text-white' >Gym</span>
     App
</Link></div>
        <div className='grid deid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
                <FooterLink href='https://www.instagram.com/faresssmostafa'
                target='_blank'
                >
                        My Instagram
                </FooterLink>


                <FooterLink href='https://www.instagram.com/faresssmostafa'
                target='_blank'
                >
                        My TiKTok
                </FooterLink>
            </Footer.LinkGroup>
        </div>
            </div>
        </div>
    </Footer>
  )
}

