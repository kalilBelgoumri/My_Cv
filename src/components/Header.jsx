import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import img from '../assets/Logo.png'
import { useState, useEffect } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

function Header() {
  const [show, setshow] = useState(true)
  const [open, setOpen] = useState(false)
  const controlNavbar = () => {
    window.scrollY < 200 ? setshow(true) : setshow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  return (
    <div className="flex flex-col">
      <div className="backgound flex flex-col"></div>

      <header
        className={`flex w-full fixed h-32 items-center justify-end header transition 
    ${show && 'header__prop'}`}
      >
        {/* ** Navbar Burger Menu ** */}
        <div className="hamurgerOpen flex items-center justify-end absolute right-0 pr-6 cursor-pointer sm:hidden ">
          <Hamburger color="white" rounded toggled={open} toggle={setOpen} />
        </div>
        <div className="logo__Nav absolute left-0 -mt-3 mx-6">
          <img className="h-1/2" src={img} alt="Logo" />
        </div>
        <div className={`"hamurgerOpen hidden sm:flex items-center justify-end cursor-pointer"
        ${show && 'hamurgerOpen'}`}
        >
          <Navigation />
          
        </div>
        <div className="mobileNavigatio transition flex justify-center items-center pr-12 sm:hidden ">
          {open && <MobileNavigation />}
        </div>
      </header>
    </div>
  )
}

export default Header
