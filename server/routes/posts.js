import express from 'express';
const router = express.Router();
import Posts from '../models/Posts.js';
import Category from '../models/Category.js';

router.get('/:slug', async (req, res) => {
  try {
    const post = await Posts.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getPosts = async (req, res, filter = {}) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 3;

  try {
    const totalPosts = await Posts.countDocuments(filter);
    const posts = await Posts.find(filter)
      .populate('category')
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      totalPosts,
      totalPages: Math.ceil(totalPosts / pageSize),
      currentPage: page,
      posts,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

router.get('/', (req, res) => getPosts(req, res));

router.get('/category/:slug', async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    if (!category) return res.status(404).json({ message: 'Category not found' });

    await getPosts(req, res, { category: category._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
