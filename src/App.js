import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import './assets/scss/styles.scss'
import {getResponse} from './components/utils/getResponse'
import ReactLoading from 'react-loading'
import logo from './assets/img/logo/logo-1.svg'
import logoTwo from './assets/img/logo/logo-2.svg'
import Panel from './components/common/Panel'
import NavMenu from './components/common/NavMenu'

import AppRouter from './components/AppRouter'

const toggleNav = () => {
  document.body.classList.toggle('nav__open')
  document.querySelector('.js-toggle-nav').classList.toggle('toggle-nav--open')
}

function App() {
  const [pages, setPages] = useState()

  useEffect(() => {
    getResponse('http://localhost:3003/pages')
      .then(data => setPages(data))
  }, [])

  if (!pages) return <ReactLoading type={'spinningBubbles'} height={'20%'} width={'20%'}/>

  const general = pages.generalData

  return (
    <BrowserRouter>
      <Panel logo={logoTwo} siteName={general.siteName} handleClick={toggleNav}/>
      <NavMenu logo={logo} siteName={general.siteName}/>
      <AppRouter pages={pages} />
    </BrowserRouter>
  )
}

export default App
