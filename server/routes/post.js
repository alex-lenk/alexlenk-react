import express from 'express';

import { GetPostsByCategory, GetPostsByTag, Posts } from '../controllers/posts/index.js';
import UpdatePost from '../controllers/posts/UpdatePost.js';
import DeletePost from '../controllers/posts/DeletePost.js';
import AddPost from '../controllers/posts/AddPost.js';
import check from '../middleware/tokenCheck.js';

const router = express.Router();

// @router  GET api/post/posts
// @desc    Get All Posts using parameters page and perPage
// @access  Public
router.get('/posts', Posts);

// @router  GET api/post/posts-by-tag
// @desc    Get posts by specific tag
// @access  Public
router.get('/posts-by-tag', GetPostsByTag);

// @router  GET api/post/posts-by-category
// @desc    Get posts by specific category
// @access  Public
router.get('/posts-by-category', GetPostsByCategory);

// @router  POST api/post/add-post
// @desc    Add a new post
// @access  Private
router.post('/add-post', check, AddPost);

// @router  Delete api/post/delete-post
// @desc    Delete a post
// @access  Private
router.delete('/delete-post', check, DeletePost);

// @router  PUT api/post/update-post
// @desc    Update an existent post
// @access  Private
router.put('/update-post', check, UpdatePost);

export default router;
