const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Voucher = require('../models/voucher');


/***************/
// Create Voucher
/***************/
router.post('/add', Voucher.addVoucher);


/***************/
// Get Voucher
/***************/
router.get('/getAll', Voucher.getAllVouchers);

/***************/
// Get Voucher
/***************/
router.get('/getVoucher/:id', (req, res, next) => {
    
});


module.exports = router;
