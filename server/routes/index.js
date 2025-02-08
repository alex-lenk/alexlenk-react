import homeRoutes from './home.js';
import skillsRoutes from './skills.js';
import contactsRoutes from './contacts.js';
import experienceRoutes from './experience.js';
import jobHistoryRoutes from './jobHistory.js';
import portfolioRoutes from './portfolio.js';
import projectsRoutes from './projects.js';
import blogRoutes from './blog.js';
import categoryRoutes from './categories.js';
import postsRoutes from './posts.js';
import authRoutes from './auth.js';
import postRoutes from './post.js';
import profileRoutes from './profile.js';

const setupRoutes = (app) => {
  app.use('/api/home', homeRoutes);
  app.use('/api/skills', skillsRoutes);
  app.use('/api/contacts', contactsRoutes);
  app.use('/api/experience', experienceRoutes);
  app.use('/api/jobHistories', jobHistoryRoutes);
  app.use('/api/portfolio', portfolioRoutes);
  app.use('/api/projects', projectsRoutes);
  app.use('/api/blog', blogRoutes);
  app.use('/api/category', categoryRoutes);
  app.use('/api/posts', postsRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/post', postRoutes);
  app.use('/api/profile', profileRoutes);
};

export default setupRoutes;
