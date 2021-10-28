import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from 'react';
import imgHamburger from './assets/hambuger.png';


function App() {
  return (
    <div className="flex flex-col">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <header>
        <div className="bg-secondary h-24 flex items-center justify-around">
          <Navbar />
          <div className="md:hidden hamburger__menu flex justify-end items-center">
            <img
              className="cursor-pointer"
              src={imgHamburger}
              alt="Hamburger"
            />
          </div>
        </div>
      </header>
      <main className="bg-primary h-24 min-h-screen w-full">
      <div className="nom flex justify-start text-white my-20 mx-52 text-3xl font-bold">
        <h1>I AM BELGOUMRI KALIL </h1>
      </div>
      <div className="nom flex justify-start text-white my-20 mx-52 text-3xl font-bold">
        <h1>WEB DEVELOPPER FULL STACK </h1>
      </div>
      </main>
      <footer className="bg-secondary h-24 min-h-96 w-full"></footer>
    </div>
  );
}

export default App;
