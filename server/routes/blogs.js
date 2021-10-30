const express = require('express');
const { newBlog } = require('../controllers/blogs')
const router = express.Router();

router.post("/new", newBlog)

module.exports = router;    