import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pt-15'>
      <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Left Section */}
            <div>
                <div className='mb-4'>
                  <Link to='/'>
                    <span className='text-dark text-2xl font-semibold'>Innovate Systems</span>
                    <div className='w-4 h-4 bg-primary rounded-full'></div>
                  </Link>
                </div> 
                <p className='text-dark/60 mb-4'>Whether you're launching a new business or looking to elevate your existing brand.</p>
                <div className='flex items-center gap-6 py-2 font-semibold text-dark/70'>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/work'>Our Work</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
            </div>
            {/*Right Section */}
            <div>
                <h3 className='text-dark text-xl font-semibold mb-3'>Subscribe to our newsletter</h3>
                <p className='text-sm text-dark/70'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='mt-4 flex flex-col md:flex-row items-start gap-2'>
                    <input 
                    className='w-full px-6 py-3 border border-dark/40 outline-none rounded placeholder:text-sm placeholder:text-dark/60'
                    type='email'
                    placeholder='Enter your email'
                    />
                    <button className='px-6 py-3 bg-primary rounded text-dark font-semibold cursor-pointer hover:bg-teal-200 transition duration-400 ease-in-out'>Subscribe</button>
                </div>
            </div>
        </div>

        <div className='mt-6 border-t border-t-dark/40 py-4 flex flex-col md:flex-row items-start gap-6 justify-between'>
          <p className='text-dark/70'>Copyright 2026 © TheravstechCodes - All Right Reserved.</p>
          <div className='flex items-center gap-4 text-xl text-primary'>
            <a href='https://www.linkedin.com/company/indosolve-systems/'>
              <FaLinkedin className= 'hover:text-teal-200 transition duration-400 ease-in-out cursor-pointer' />
            </a>
            <a href="http://www.instagram.com">
              <FaInstagram className= 'hover:text-teal-200 transition duration-400 ease-in-out cursor-pointer' />
            </a>
            <a href="http://www.facebook.com">
              <FaFacebook className='hover:text-teal-200 transition duration-400 ease-in-out cursor-pointer'/>
            </a>
            <a href="http://www.twitter.com">
              <FaTwitter className= 'hover:text-teal-200 transition duration-400 ease-in-out cursor-pointer' />
            </a>
            <a href="http://www.google.com">
              <FaGoogle className= 'hover:text-teal-200 transition duration-400 ease-in-out cursor-pointer'/>
            </a>  
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
