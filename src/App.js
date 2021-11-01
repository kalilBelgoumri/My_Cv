import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import img from './assets/Logo.png';
import { BiMenuAltLeft, BiMessageRounded, BiWindowClose } from 'react-icons/bi';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Competences from './components/Competences';
import Footer from './components/Footer';
import Cardportofolio from './components/CardPortofolio';
import retrowild from './assets/retroWild.png';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <header className="h-42 flex items-end justify-end  w-full p-6">
        <div className="humburer__Menu transition ease-in-out duration-1000 visible md:hidden absolute flex right-0 cursor-pointer mx-3 pl-3 ">
          {open ? (
            <BiWindowClose
              className="hamburger__open transition ease-in-out duration-1000"
              size="40px"
              color="white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <BiMenuAltLeft
              className="hamburger__open transition ease-in-out duration-1000"
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
      <main className="w-full flex flex-col justify-center items-center">
        <Contact />
        <Competences />
        <div className="aboutUs bg-gray-800 pattern flex justify-center items-center">
          <AboutUs />
        </div>
        <div className="card__portofolio flex items-center flex-row justify-center space-x-6 py-6">
        <div className="portofolio my-40 space-x-4">
          <Cardportofolio
            image={retrowild}
            site="https://retrowild.netlify.app/"
            height={100}
            width={100}
          />
        </div>
        <div className="portofolio flex items-center justify-center my-40 space-x-4">
          <Cardportofolio
            image={retrowild}
            site="https://retrowild.netlify.app/"
            height={100}
            width={100}
          />
        </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
