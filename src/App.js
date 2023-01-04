import React, {useEffect, useState} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './assets/scss/styles.scss'
import {getResponse} from './components/utils/getResponse'
import ReactLoading from 'react-loading'
import logo from './assets/img/logo/logo-1.svg'
import logoTwo from './assets/img/logo/logo-2.svg'
import Panel from './components/common/Panel'
import NavMenu from './components/common/NavMenu'
import Home from './layout/Home'
import NotFound from './layout/NotFound'
import Portfolio from './layout/Portfolio'
import Experience from './layout/Experience'
import Skills from './layout/Skills'
import Contacts from './layout/Contacts'
import Blog from './layout/Blog'

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
      <Panel logo={logoTwo} siteName={general.siteName}/>
      <NavMenu logo={logo} siteName={general.siteName}/>

      <Switch>
        <Route path='/' exact render={() => <Home data={pages.home}/>}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/experience' render={() => <Experience data={pages.experience}/>}/>
        <Route path='/skills' render={() => <Skills data={pages.skills}/>}/>
        <Route path='/contacts' render={() => <Contacts dataGeneral={general.social} data={pages.contacts}/>}/>
        <Route path='/blog/:postId?' render={() => <Blog data={pages.blog}/>}/>
        <Route path='/404' component={NotFound}/>
        <Redirect to='/404'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
