import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import MobileNavigation from './components/MobileNavigation'
import Navigation from './components/Navigation'
import img from './assets/Logo.png'
import { BiMenuAltLeft, BiWindowClose } from 'react-icons/bi'
import { useState } from 'react'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Cardportofolio from './components/CardPortofolio'
import retrowild from './assets/retroWild.png'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      {/* ** Navbar Burger Menu ** */}
      <header className="h-50 flex items-center justify-end  w-full p-6">
        <div className="  md:hidden absolute flex right-0 cursor-pointer mx-3 pl-3 ">
          {open ? (
            <BiWindowClose
              className="hamburger__close humburer__Menu visible transition-all duration-1000 "
              size="40px"
              color="white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <BiMenuAltLeft
              className="hamburger__open hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              size="40px"
              color="white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <div className="flex md:visible invisible">
          <div className="logo__Nav absolute left-0 -mt-3 mx-6">
            <img className="h-1/2" src={img} alt="Logo" />
          </div>
          <Navigation />
        </div>
        <div className="mobileNavigation sm:visible md:hidden flex items-center mr-10 ">
          {open && <MobileNavigation />}
        </div>
      </header>
      {/* ** Contact ** */}
      <main className=" flex flex-col justify-center items-center bg-white">
        <div className="contact mb-52">
          <Contact />
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
        <div className="contact flex items-center justify-center text-white font-bold invisible md:visible border-4 border-white-500 px-12 py-2 rounded-md cursor-pointer w-1/4">
          <a href="mailto:kalil.belgoumri@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
