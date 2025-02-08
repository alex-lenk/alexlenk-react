import express from 'express';
const router = express.Router();
import Blog from '../models/Blog.js';

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findOne({});
    res.json(blogData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
