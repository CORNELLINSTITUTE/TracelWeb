const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/book');

/***************/
//Book 
/***************/
router.post('/add', Book.addBook);

module.exports = router;
