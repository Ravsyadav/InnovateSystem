import React from 'react'
import {assets} from '../assets/assets'
import {teams} from '../assets/assets'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMicrosoft, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='container mx-auto px-6 py-40'>
        <div className='flex items-center mx-auto gap-4 border border-primary/60 rounded-full pl-2 py-2 w-full text-xs md:text-base md:w-[25%] mb-12'> 
            <div className='flex items-center -space-x-3'>
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile1} alt="" srcset="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile2} alt="" srcset="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile8} alt="" srcset="" />
                <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile4} alt="" srcset="" />
            </div> 
            <span>Trusted by 20k+ people</span>      
        </div>
        <h1 className='text-center text-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6'>
            <span>We Help Brands Grow With</span>
            <br />
            <span className='text-primary'>Performance </span>
            <span>Marketing</span>
        </h1>
        <p className='max-w-xl mx-auto font-thin text-center text-dark/80 mb-12 text-2xl'>
            At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.
        </p>
        <div className='mb-6 flex items-center justify-center gap-2'>
            <Link to='/contact'>
              <button className='bg-primary hover:bg-teal-200 transition duration-400 ease-in-out text-dark px-6 py-2.5 rounded-full text-sm md:text-base cursor-pointer font-semibold'>Contact Me</button>
            </Link>
            
            <button className='hover:hover:text-teal-200 transition duration-400 ease-in-out border border-dark text-white bg-dark px-6 py-2.5 rounded-full text-sm md:text-base ml-4 cursor-pointer font-semibold'>Digital Market</button>
        </div>
        {/* Hero Image*/}
        <div className='mt-16 max-w-5xl mx-auto rounded-2xl shadow overflow-hidden'> 
            <img className='w-full h-full object cover' src={assets.hero} alt="" />
        </div>
      </div>
      {/* Social Media Section */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
        <p className='text-xl md:text-5xl text-center text-dark/80'>
          Social Media
        </p>
        <div className='flex flex-wrap items-center justify-center mt-10 gap-12'>
          <div className='w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href='https://www.linkedin.com/company/indosolve-systems/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='w-10 h-10 text-primary hover:text-teal-200 transition duration-400 ease-in-out' />
            </a>
          </div>

          <div className='w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href='https://www.instagram.com/your-profile' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='w-10 h-10 text-primary hover:text-teal-200 transition duration-400 ease-in-out' />
            </a>
          </div>

          <div className='w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href='https://www.facebook.com/in/your-profile' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='w-10 h-10 text-primary hover:text-teal-200 transition duration-400 ease-in-out' />
            </a>
          </div>

          <div className='w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href='https://www.twitter.com/in/your-profile' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='w-10 h-10 text-primary hover:text-teal-200 transition duration-400 ease-in-out' />
            </a>
          </div>

          <div className='w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href='https://www.microsoft.com/in/your-profile' target='_blank' rel='noopener noreferrer'>
              <FaMicrosoft className='w-10 h-10 text-primary hover:text-teal-200 transition duration-400 ease-in-out' />
            </a>
          </div>

          <div className='w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href='https://www.google.com/in/your-profile' target='_blank' rel='noopener noreferrer'>
              <FaGoogle className='w-10 h-10 text-primary hover:text-teal-200 transition duration-400 ease-in-out' />
            </a>
          </div>
    
        </div>
        </div>
      </div> 
      {/* Team Section */} 
      <div id='team' className=' pb-20 bg-white'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'> 
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl mb-6 text-dark'>Meet the team</h1>
                <p className='max-w-xl mx-auto text-dark/60'>Behind every successful project is a passionate and skilled team — and ours is no exception.</p>
            </div>
            {/* Team Member Display */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {
                    teams.map((team,index)=>(
                        <div key={index} className='rounded-xl overflow-hidden p-6 border border-primary/50 bg-white flex items-center gap-6 hover:scale-105 transition duration-300 cursor-pointer'>
                            <img className='w-12 h-12 rounded-full object-cover' src={team.image} alt="" />
                            <div>
                                <h1 className='text-sm text-dark font-semibold'>{team.name}</h1>
                                <p className='text-sm text-dark/60'>{team.position}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>    
      </div>
    </div>
  )
}

export default Home
