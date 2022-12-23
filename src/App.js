import React from 'react'
import './assets/scss/styles.scss'
import logo from './assets/img/logo/logo-1.svg'
import logoTwo from './assets/img/logo/logo-2.svg'
import Panel from './components/Panel'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

function App() {
  const siteName = 'Александр Янковой - Frontend developer'
  return (
    <BrowserRouter>
      <Panel logo={logoTwo} siteName={siteName}/>
      <NavMenu logo={logo} siteName={siteName}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/404' component={NotFound}/>
        <Redirect to='/404'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
