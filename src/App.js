import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import img from './assets/Logo.png';
import { BiMenuAltLeft, BiMessageRounded, BiWindowClose } from 'react-icons/bi';
import { BsGithub, BsKanbanFill } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { useState } from 'react';
import Cardportofolio from './components/CardPortofolio';

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
        <div className="userName hidden md:flex items-center justify-start text-white my-20 mx-40 text-xl font-bold">
          <h5>BELGOUMRI KALIL </h5>
          <span className="w-36 h-2 bg-white ml-6"></span>
        </div>
        <div className="devlopper hidden md:flex items-center justify-start text-white my-20 mx-40 text-xl font-bold">
          <h5>WEB DEVELOPPER FULL STACK </h5>
          <span className="w-36 h-2 bg-white ml-6"></span>
        </div>
        <div className="icon__social hidden md:flex items-center absolute my-72 -mx-40 left-0 transform -rotate-90">
          <span className="w-36 h-2 bg-white ml-6"></span>
          <div className="social flex flex-col">
            <h1 className="text-white font-bold text-3xl "> SOCIAL </h1>
          </div>
          <div className="GitHub__social px-5 cursor-pointer">
            <BsGithub
              onClick={() => {
                window.location.href = 'https://github.com/kalilBelgoumri';
              }}
              size="40px"
              color="white"
            />
          </div>
          <div className="linkedin__social px-5 cursor-pointer">
            <TiSocialLinkedinCircular size="55px" color="white" />
          </div>
        </div>
        <div className="about__Us flex items-center justify-center text-white mx-40 my-52">
          <h1 className="font-bold text-4xl p-32 flex items-center justify-center absolute mb-64">
            A propos de moi
          </h1>
          <h3 className="flex items-center justify-center text-center font-bold text-2xl">
            Passionné des nouvelles technologies et du code, je suis
            actuellement ouvert aux opportunités CDI en tant que développeur
            Front-End ou Full Stack Javascript, pour toute proposition, veuillez
            me contacter
          </h3>
        </div>
        <div className="contact__Button flex justify-center items-center -my-32">
          <div className="cntact flex items-center justify-center text-white font-bold invisible md:visible w-auto border-4 border-purple-500 px-12 py-2 rounded-md cursor-pointer animate-bounce">
            <a href="mailto:kalil.belgoumri@gmail.com">Contact</a>
          </div>
        </div>
        <div className="font-bold text-4xl text-white portofolio flex items-center justify-center pt-36">
          <h1> Mon Portofolio </h1>
        </div>
        <div className="portofolio flex items-center justify-center space-x-4 p-10 shadow-2xl transition transform hover: duration-500 ease-in-out ">
          <Cardportofolio
            image="https://picsum.photos/500/300?random=1"
            site="www.google.fr"
          />
          <Cardportofolio
            image="https://picsum.photos/500/300?random=2"
            site={'www.google.fr'}
          />
          <Cardportofolio
            image="https://picsum.photos/500/300?random=3"
            site={'www.google.fr'}
          />
        </div>
      </main>
      <footer className="text-white font-bold h-32 min-h-96 w-full flex justify-center items-center">
        <p className="text-red-800">Copyright Kalil2021</p>
      </footer>
    </div>
  );
};

export default App;
