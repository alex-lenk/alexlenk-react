import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from '../layout/Home'
import NotFound from '../layout/NotFound'
import Portfolio from '../layout/Portfolio'
import Experience from '../layout/Experience'
import Skills from '../layout/Skills'
import Contacts from '../layout/Contacts'
import Blog from '../layout/Blog'
import PropTypes from "prop-types";

const AppRouter = ({pages}) => {
  return (
    <Switch>
      <Route path='/' exact render={() => <Home data={pages.home}/>}/>
      <Route path='/portfolio' render={()=> <Portfolio/>}/>
      <Route path='/experience' render={() => <Experience data={pages.experience}/>}/>
      <Route path='/skills' render={() => <Skills data={pages.skills}/>}/>
      <Route path='/contacts' render={() => <Contacts dataGeneral={pages.generalData.social} data={pages.contacts}/>}/>
      <Route path='/blog/:postId?' render={() => <Blog data={pages.blog}/>}/>
      <Route path='/404' component={NotFound}/>
      <Redirect to='/404'/>
    </Switch>
  )
}

AppRouter.propTypes = {
  pages: PropTypes.object.isRequired,
}

export default AppRouter
