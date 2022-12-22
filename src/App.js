import React from 'react'
import './assets/scss/styles.scss'
import logo from './assets/img/logo/logo-1.svg'
import logoTwo from './assets/img/logo/logo-2.svg'
import Panel from './components/Panel'
import NavMenu from "./components/NavMenu";

function App() {
  const siteName = 'Александр Янковой - Frontend developer'
  return (
    <>
      <Panel logo={logoTwo} siteName={siteName}/>
      <NavMenu logo={logo} siteName={siteName}/>
      <div className="page__content container">
        App
      </div>
    </>
  )
}

export default App
