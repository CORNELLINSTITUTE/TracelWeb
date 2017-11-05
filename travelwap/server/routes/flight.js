const express = require('express');
const router = express.Router();
const Flight = require('../models/flight');

/***************/
//GET FLIGHTS BY REGION
/***************/
router.get('/getFlightsByRegion', (req, res, next) => {
    Flight.find({ "region": req.query.region}).then(function (flights) {
        res.send(flights);
    })
});

module.exports = router;