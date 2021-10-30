import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import img from './assets/Logo.png';
import { BiMenuAltLeft, BiWindowClose } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { useState } from 'react';

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
      <main className=" h-24 min-h-screen w-full ">
        <div className="userName hidden md:flex items-center justify-start text-white my-20 mx-8 text-xl font-bold">
          <h5>I AM BELGOUMRI KALIL </h5>
          <span className="w-36 h-2 bg-white ml-6"></span>
        </div>
        <div className="devlopper hidden md:flex items-center justify-start text-white my-20 mx-8 text-xl font-bold">
          <h5>WEB DEVELOPPER FULL STACK </h5>
          <span className="w-36 h-2 bg-white ml-6"></span>
        </div>
        <div className="icon__social hidden md:flex items-center absolute my-20 -mx-28 left-0 transform -rotate-90">
        <div className="social"> 
          <h1 className="text-white font-bold text-3xl mx-5 "> SOCIAL </h1>
          
        </div>
          <div className="GitHub__social px-5 cursor-pointer">
          <BsGithub size="40px" color="white" />
          </div>
          <div className="linkedin__social px-5 cursor-pointer">
            <TiSocialLinkedinCircular size="55px" color="white" />
          </div>
        </div>
      </main>
      <footer className="bg-secondary h-24 min-h-96 w-full"></footer>
    </div>
  );
};

export default App;
