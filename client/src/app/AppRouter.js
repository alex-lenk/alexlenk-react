import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'components/pages/Home';
import NotFound from 'components/pages/NotFound';
import Skills from 'components/pages/Skills';
import Contacts from 'components/pages/Contacts';
import Portfolio from 'components/pages/Portfolio';
import Experience from 'components/pages/Experience';
import Blog from 'components/pages/blog/Blog';
import Login from 'components/pages/Login';
import Register from 'components/pages/Register';
import PrivateRoute from 'components/common/PrivateRoute';
import AddPost from 'components/pages/AddPost';
import Profile from 'components/pages/Profile';
import { ROUTES_LINKS } from 'routes';

const AppRouter = ({ status }) => {
  return (
    <Routes>
      <Route path={ ROUTES_LINKS.HOME } element={ <Home/> }/>
      <Route path={ ROUTES_LINKS.SKILLS } element={ <Skills/> }/>
      <Route path={ ROUTES_LINKS.CONTACTS } element={ <Contacts/> }/>
      <Route path={ ROUTES_LINKS.PORTFOLIO } element={ <Portfolio/> }/>
      <Route path={ ROUTES_LINKS.EXPERIENCE } element={ <Experience/> }/>

      <Route path={ ROUTES_LINKS.BLOG } element={ <Blog/> }/>
      <Route path={ ROUTES_LINKS.BLOG_CATEGORY } element={ <Blog/> }/>
      <Route path={ ROUTES_LINKS.BLOG_POST } element={ <Blog/> }/>

      <Route element={<PrivateRoute isAllowed={status === 'success'} />}>
        <Route path={ ROUTES_LINKS.POST_ADD } element={ <AddPost/> }/>
        <Route path={ ROUTES_LINKS.PROFILE } element={ <Profile/> }/>
      </Route>

      <Route path={ ROUTES_LINKS.LOGIN } element={ <Login/> }/>
      <Route path={ ROUTES_LINKS.REG } element={ <Register/> }/>

      <Route path="*" element={ <NotFound/> }/>
    </Routes>
  );
};

AppRouter.propTypes = {
  status: PropTypes.string,
};

export default AppRouter;
