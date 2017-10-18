const express = require('express');
const router = express.Router();
const User = require('../models/user');

/***************/
//CHECK USER
/***************/
router.get('/login', (req, res, next) => {
    User.find({"username":req.query.username, "password":req.query.password}).then(function(users){
        res.send(users);
    })    
});

/***************/
//GET ALL USERS
/***************/
router.get('/getAll', (req, res, next) => {
    User.find({"username":"massamisan","password":"123"}).then(function(users){
        res.send(users);
    });
});

module.exports = router;