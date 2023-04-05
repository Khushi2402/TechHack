import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import logo from '../../assets/Amity.svg'
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }


  return (
    <div className='Navbar flex w-full  justify-between items-center h-20 pl-4 pr-4 sticky top-0 z-10'>   
      <div>
        <Link to='home' smooth={true} duration={500}>
        <img src={logo} className="" alt="logo" />
        </Link>
      </div>
      <ul className='NavContents hidden md:flex text-white'>
        <li className=' hover:text-white'>
          <Link to='home' smooth={true} duration={500}>
            HACKATHON
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link to='events' smooth={true} duration={500}>
            ENTERTAINMENT
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link to='contact' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link to='home' smooth={true} duration={500}>
            RULES & REGULATIONS
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-white' size={20} /> : <FiMenu className='text-white' size={20} />}
      </div>

      <div onClick={handleNav} className={nav ? 'HamNav absolute left-0 top-0 w-full px-4 py-7 flex flex-col' : 'absolute left-[-100%]'} >
        <ul>
        <li className=' hover:text-white'>
          <Link to='home' smooth={true} duration={500}>
            HACKATHON
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link to='events' smooth={true} duration={500}>
            ENTERTAINMENT
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link to='contact' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link to='home' smooth={true} duration={500}>
            RULES & REGULATIONS
          </Link>
        </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar
