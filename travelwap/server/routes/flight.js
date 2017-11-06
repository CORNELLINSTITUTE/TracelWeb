const express = require('express');
const router = express.Router();
const Flight = require('../models/flight');

router.get('/getFlightsByRegion/:region', Flight.getByRegion);

router.post('/add', Flight.add);

router.get('/getAll', Flight.getAll);

router.get('/get/:id', Flight.get);

router.post('/update/:id', Flight.update);

router.delete('/delete/:id', Flight.delete);

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