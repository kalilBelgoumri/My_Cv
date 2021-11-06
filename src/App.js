import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import MobileNavigation from './components/MobileNavigation'
import Navigation from './components/Navigation'
import img from './assets/Logo.png'
import { useState, useEffect } from 'react'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Cardportofolio from './components/CardPortofolio'
import retrowild from './assets/retroWild.png'
import cv from './documents/Belgoumri_kalil_cv.pdf'
import { Divide as Hamburger } from 'hamburger-react'

const App = () => {
  const [show, setshow] = useState(true)
  const [open, setOpen] = useState(false)
  const controlNavbar = () => {
    {
      window.scrollY > 100 ? setshow(false) : setshow(!false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <div className="flex flex-col">
      <header
        className={`flex w-full fixed h-32 items-center justify-end header transition 
      ${show && 'header__prop'}`}
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* ** Navbar Burger Menu ** */}
        <div className="hamurgerOpen flex items-center justify-end absolute right-0 pr-6 cursor-pointer sm:hidden ">
          <Hamburger color="white" rounded toggled={open} toggle={setOpen} />
        </div>
        <div className="logo__Nav absolute left-0 -mt-3 mx-6">
          <img className="h-1/2" src={img} alt="Logo" />
        </div>
        <div className="hamurgerOpen hidden sm:flex items-center justify-end cursor-pointer">
          <Navigation />
        </div>
        <div className="mobileNavigatio transition flex justify-center items-center pr-12 sm:hidden ">
          {open && <MobileNavigation />}
        </div>
      </header>
      {/* ** Contact ** */}
      <main className=" flex flex-col justify-center items-center bg-white">
        <div className="contact mb-56">
          <Contact />
        </div>
        {/* ** CV ** */}
        <div className="contact bg-blend-darken flex items-center justify-center text-blue-600 font-bold border-4 border-black px-12 py-2 rounded-md cursor-pointer ">
          <a href={cv}> Télécharger mon CV</a>
        </div>
        {/* ** Competences ** */}
        <div className="competences my-52">
          <Competences />
        </div>
        {/* ** AboutUs ** */}
        <div className="about px-24 w-full">
          <div className="aboutUs bg-gray-800 pattern flex justify-center items-center rounded-lg shadow-2xl px-24">
            <AboutUs />
          </div>
        </div>
        {/* ** Portofolio ** */}
        <h1 className="text-6xl font-extrabold text-center my-20">
          MES PROJETS
        </h1>
        <div className="card__portofolio flex items-center justify-center flex-col px-14 sm:w-4/5 md:w-9/12 lg:w-10/12 pt-20 xl:w-2/3">
          <div className="retro__Wild flex items-center justify-center py-5">
            <h3 className="text-center text-red-600 text-3xl font-bold">
              Retro_Wild
            </h3>
          </div>
          <div className="portofolio flex space-x-4">
            <Cardportofolio
              image={retrowild}
              site="https://space-park.netlify.app/"
            />
          </div>
          <div className="retro__Wild flex items-center justify-center py-5">
            <h3 className="mb-10 text-center text-red-600 text-3xl font-bold">
              SpacePark
            </h3>
          </div>
          <div className="portofolio flex pb-10">
            <Cardportofolio
              image={retrowild}
              site="https://retrowild.netlify.app/"
            />
          </div>
        </div>
      </main>
      {/* ** Footer ** */}
      <footer className="bg-gray-900 h-40 flex justify-center items-center">
        <div className="contact flex items-center justify-center text-white font-bold  border-4 border-white-500 px-12 py-2 rounded-md cursor-pointer w-1/4">
          <a href="mailto:kalil.belgoumri@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
