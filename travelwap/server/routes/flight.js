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

/***************/
// Flight CRUD
/***************/
router.post('/add', Flight.addFlight);
router.post('/update/:id', Flight.updateFlight);
router.delete('/delete/:id', Flight.deleteFlight);

/***************/
// Get All Flights
/***************/
router.get('/getAll', Flight.getAllFlights);

/***************/
// Get Flight by Id
/***************/
router.get('/getFlight/:id', Flight.getFlight);


module.exports = router;