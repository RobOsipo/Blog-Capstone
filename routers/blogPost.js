const express = require('express');
const BlogController = require('../controllers/blogPost.js');
const router = express.Router();
const checkJwt = require('../checkJWT.js');




router.get('/blog', checkJwt, BlogController.getAllBlogs )

router.get('/posts', checkJwt, BlogController.getAllPostTitle)

router.get('/posts/:id', checkJwt, BlogController.getBlogByPostId)

router.post('/blog', checkJwt, BlogController.composeBlogPost)

router.delete('/posts/:id', checkJwt, BlogController.deleteBlogPostById)


module.exports = router;

