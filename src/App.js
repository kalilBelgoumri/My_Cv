import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import img from './assets/Logo.png';
import { BiMenuAltLeft, BiMessageRounded, BiWindowClose } from 'react-icons/bi';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import AboutUs from './components/AboutUs';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <header className="h-32 flex items-center justify-end">
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
      <main className="w-full flex flex-col">
        <Contact />
        <AboutUs />
        <Portofolio />
      </main>
      <footer className="bg-white font-bold h-32 min-h-96 w-full flex justify-center items-center">
        <p className="text-red-800">Copyright Kalil2021</p>
      </footer>
    </div>
  );
};

export default App;
