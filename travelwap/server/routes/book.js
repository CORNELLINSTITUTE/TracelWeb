const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/book');

/***************/
//Book 
/***************/
router.post('/book', (req, res, next) => {
    //Initialize the object to be inserted in the DB
    let newBook = new Book
    ({
        user_id: req.body.user_id,
        username: req.body.username,
        type_id: req.body.type_id,
        type_name: req.body.type_name
    });

    //Execute model method to insert the object
    Book.addBook(newBook, (err, book) => {
        if(err)
        {
            res.json({success: false, msg:'Failed to book item'});
        }
        else
        {
            res.json({success: true, msg:'Item booked'});
        }
    });
});

module.exports = router;
