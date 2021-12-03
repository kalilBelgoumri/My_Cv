import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import Competences from './components/Competences'
import Projets from './components/Projets'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />{' '}
        <Route path="/competences" component={Competences} />{' '}
        <Route path="/projets" component={Projets} />{' '}
      </Switch>{' '}
    </Router>
  )
}

export default App
