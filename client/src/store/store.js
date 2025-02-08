import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { homeApiSlice } from 'api/homeApiSlice';
import { skillsApiSlice } from 'api/skillsApiSlice';
import { contactsApiSlice } from 'api/contactsApiSlice';
import { portfolioApiSlice } from 'api/portfolioApiSlice';
import { experienceApiSlice } from 'api/experienceApiSlice';
import { jobApiSlice } from 'api/jobApiSlice';
import { projectsApiSlice } from 'api/projectsApiSlice';
import { blogApiSlice } from 'api/blogApiSlice';
import postsReducer from 'redux/slices/posts';
import postReducer from 'redux/slices/post';
import userReducer from 'redux/slices/auth';

const rootReducer = combineReducers({
  homeData: homeApiSlice.reducer,
  skillsData: skillsApiSlice.reducer,
  contactsData: contactsApiSlice.reducer,
  portfolioData: portfolioApiSlice.reducer,
  projectsData: projectsApiSlice.reducer,
  experienceData: experienceApiSlice.reducer,
  jobData: jobApiSlice.reducer,
  blogData: blogApiSlice.reducer,
  posts: postsReducer,
  post: postReducer,
  auth: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(homeApiSlice.middleware)
      .concat(skillsApiSlice.middleware)
      .concat(contactsApiSlice.middleware)
      .concat(portfolioApiSlice.middleware)
      .concat(projectsApiSlice.middleware)
      .concat(experienceApiSlice.middleware)
      .concat(jobApiSlice.middleware)
      .concat(blogApiSlice.middleware)
});

export default store;
