const express = require('express');
const { newBlog , allBlogs , deleteItem , getBlogItem , highlights} = require('../controllers/blogs')
const router = express.Router();

router.post("/new", newBlog)
router.get("/all", allBlogs)
router.get("/delete/:id", deleteItem)
router.get("/item/:id", getBlogItem)
router.get("/highlights", highlights)

module.exports = router;    