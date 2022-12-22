import React from 'react'
import './assets/scss/styles.scss'
import logo from './assets/img/logo/logo-2.svg'
import Panel from './components/Panel'

function App() {
  return (
    <>
      <Panel logo={logo} siteName='AlexLenk'/>
      <div className="page__content container">
        App
      </div>
    </>
  )
}

export default App
