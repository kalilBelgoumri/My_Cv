import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from 'react';
import imgHamburger from './assets/hambuger.png';
import Footer from './components/Footer';
import Article from './components/Article';
import Main from './components/Main';

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
          <img className="cursor-pointer" src={imgHamburger} alt="Hamburger" />
        </div>
        </div>
      </header>
      <main className="bg-black h-2/4"></main>
      <Main />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
