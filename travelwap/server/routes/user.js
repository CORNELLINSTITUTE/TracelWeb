const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const saltRounds = 10;

/***************/
//CHECK USER
/***************/
router.get('/login', (req, res, next) => {
    User.aggregate([
        { $match: { "username": req.query.username } },
        {
            $lookup:
            {
                from: 'people',
                localField: 'person_id',
                foreignField: '_id',
                as: 'personDetails'
            }
        }
    ]).then(function (person) {
        if (person.length !== 0) {
            if (!bcrypt.compareSync(req.query.password, person[0].password)) {
                person = null;
            }
        }

        res.send(person);
    })
});

/***************/
//GET ALL USERS
/***************/
router.get('/getAll', (req, res, next) => {
    User.find().then(function (users) {
        res.send(users);
    });
});

module.exports = router;