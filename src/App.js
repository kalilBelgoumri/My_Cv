import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from 'react';
import img from './assets/Logo.png'

function App() {
  return (
    <div>
      <header>
        <img className="h-1/3" src={img} alt="Logo" />
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <article>
      </article>
      <footer>
      </footer>
    </div>
  );
}

export default App;
