import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts); //retrieve
router.post('/', createPost); //sending
router.get('/:id', getPost);
router.patch('/:id', updatePost); //updating
router.delete('/:id', deletePost); //deleting
router.patch('/:id/likePost', likePost);

export default router;