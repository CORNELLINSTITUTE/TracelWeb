const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Voucher = require('../models/voucher');


/***************/
// Create Voucher
/***************/
router.post('/add', (req, res, next) => {
    let voucher = new Voucher({
        name: req.body.name,
        code: req.body.code
    });

    res.json(req.body);
});

/***************/
// Get Voucher
/***************/
router.get('/:code', (req, res, next) => {

});


module.exports = router;
