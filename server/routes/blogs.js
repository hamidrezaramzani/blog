const express = require('express');
const { newBlog , allBlogs , deleteItem} = require('../controllers/blogs')
const router = express.Router();

router.post("/new", newBlog)
router.get("/all", allBlogs)
router.get("/delete/:id", deleteItem)

module.exports = router;    