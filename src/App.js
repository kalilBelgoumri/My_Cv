import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Competences from './pages/Competences'
import Portofolio from './pages/Portofolio'
import React from 'react'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
           <Route path="/competences" component={Competences} />
                    <Route path="/portofolio" component={Portofolio} />
        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
