import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const[showMenu, setShowMenu] = React.useState(false)
  return (
    <nav className='w-full fixed top-0 z-50 backdrop-blur-2xl'>

        <div className='flex items-center justify-between py-8 px-6 sm:px-12 md:px-24 lg:px-40'>

            {/* Left Section */}
            <Link to="/">
                <div>
                    <span className='text-3xl font-bold text-dark hover:text-teal-200 transition duration-300 ease-in-out'>
                        Indosolve Systems
                    </span>
                    <div className='w-4 h-4 bg-primary rounded-full'></div>
                </div>
            </Link>
            

             {/* Mid Section */}
            <div className='hidden md:flex space-x-6 items-center text-dark/80 font-bold'>

                <Link to='/' className='hover:text-teal-200 transition duration-300 ease-in-out'>
                    Home
                </Link>

                <Link to='/services' className='hover:text-teal-200 transition duration-300 ease-in-out'>
                    Services 
                </Link>

                <Link to='/work' className='hover:text-teal-200 transition duration-300 ease-in-out'>
                    Work
                </Link>

                <Link to='/contact' className='hover:text-teal-200 transition duration-300 ease-in-out'>
                    Contact
                </Link>

            </div>

             {/* Right Section */}
            <div className='hidden md:block' >

                <Link to='/contact'>
                    <button className=' flex items-center bg-primary text-dark px-6 py-2.5 hover:bg-teal-200 transition duration-400 ease-in-out rounded-full font-semibold cursor-pointer'>
                        Contact Me 
                        <FaArrowRightLong className='inline-block ml-2 text-dark' />
                    </button> 
                </Link>

            </div> 
            
            {/* Mobile Menu Icon */}
            <div className='md:hidden z-10'>
                {
                    showMenu ? 
                    <FaXmark className='text-2xl text-dark cursor-pointer'
                    onClick={() => setShowMenu(!showMenu)} /> 
                    : <FaBars className='text-2xl text-dark cursor-pointer' 
                    onClick={() => setShowMenu(!showMenu)} />    
                }
               {/* <FaBars /> */}
               {/* <FaXmark /> */}
            </div>

        </div>
        {/* Mobile Menu */}
        {
            showMenu && (
                <div className='md:hidden bg-white/90 backdrop-blur-lg py-4 px-8'>

                    <div className='flex flex-col space-y-4 items-center justify-center text-dark fixed bg-primary/50 w-64 top-0 right-0 h-screen'>

                        <Link onClick={() => setShowMenu(!showMenu)} to='/' className='hover:text-yellow-500 transition duration-300 ease-in-out'>
                            Home
                        </Link>

                        <Link onClick={() => setShowMenu(!showMenu)} to='/services' className='hover:text-yellow-500 transition duration-300 ease-in-out'>
                            Services
                        </Link>

                        <Link onClick={() => setShowMenu(!showMenu)} to='/work' className='hover:text-yellow-500 transition duration-300 ease-in-out'>
                            Work
                        </Link>

                        <Link onClick={() => setShowMenu(!showMenu)} to='/contact' className='hover:text-yellow-500 transition duration-300 ease-in-out'>
                            Contact
                        </Link>

                    </div>

                </div>
            )
        }
        
    </nav>
  )
}

export default Navbar
