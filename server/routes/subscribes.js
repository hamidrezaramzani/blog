const express = require('express');
const {join} = require('../controllers/subscribes')
const router = express.Router();

router.post("/join" , join)

module.exports = router;