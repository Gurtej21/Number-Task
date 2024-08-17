
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline';
import './Navbar.css'
const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[10%] py-5 border-b border-[#3c3c3c] text-white font-[500]">

      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <img src={logo} className="w-[max(5vw,50px)]" alt="Logo" />
          <h2 className={`text-[24px] font-[700] ${darkMode ? 'text-white' : 'text-black'}`}>BookAI</h2>
        </div>

        {/* dark mode toggle */}

        <div className='flex items-center justify-center'>
          
          <button onClick={toggleDarkMode} className="flex items-center bg-transparent text-white font-medium py-3 px-6 rounded-md  cursor-pointer  md:mt-0 border- " title='switch-themes'>
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6 text-black " />}

          </button>
          <button
            className={`md:hidden text-white focus:outline-none ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:gap-[max(1vw,12px)] flex-col md:flex-row mt-4 md:mt-0 w-full md:w-auto`}>



        <ul className={`flex flex-col md:flex-row gap-4 md:gap-5 list-none text-[17px] w-full md:w-auto font-[600] ${darkMode ? 'text-white' : 'text-black'}`}>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">How It Works</li>
          <li className="cursor-pointer">Roadmap</li>
          <li className="cursor-pointer">API</li>
          <li className="cursor-pointer">Price</li>
          <li className="cursor-pointer">Models</li>
        </ul>

       


        <button className="flex items-center bg-gradient-to-r from-[#726bff] to-[#57b6fe] text-white font-medium py-3 px-6 rounded-md border-none cursor-pointer mt-4 md:mt-0  md:w-auto" alt="darkmode">
          Login / Sign Up
        </button>
      </div>

    </div>
  )
}

export default Navbar