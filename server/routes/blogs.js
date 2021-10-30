const express = require('express');
const { newBlog , allBlogs } = require('../controllers/blogs')
const router = express.Router();

router.post("/new", newBlog)
router.get("/all", allBlogs)

module.exports = router;    