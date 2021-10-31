const express = require('express');
const { newBlog , allBlogs , deleteItem , getBlogItem} = require('../controllers/blogs')
const router = express.Router();

router.post("/new", newBlog)
router.get("/all", allBlogs)
router.get("/delete/:id", deleteItem)
router.get("/item/:id", getBlogItem)

module.exports = router;    