const mongoose = require('mongoose');

//Flight Schema
const FlightSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    airline: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    travelDate: {
        type: Date,
        required: true
    },
    bookBy: {
        type: Date,
        required: true
    }
});

/*******************/
//FUNCTIONS
/*******************/
const Flight = module.exports = mongoose.model('Flight', FlightSchema);

// Get the country by Id
module.exports.getFlightById = (id, callback) => {
    Flight.findById(id, callback);
}

// Get all flights
module.exports.getAllFlights = (req, res) => {
    Flight.find({}, (err, flights) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to retrieve flights' });
        }
        res.json({ flights });
    });
};

//get flight by flight id
module.exports.getFlight = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to retrieve flight' });
        }
        res.json({ flight });
    });
};

// Flight CRUD
module.exports.addFlight = (req, res) => {
    let flight = new Flight(req.body);
    flight.save((err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create flight' });
        }
        res.json({ success: true, msg: 'Flight created' });
    });
};

module.exports.updateFlight = (req, res) => {
    Flight.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to update flight' });
        }
        res.json({ success: true, msg: 'Flight updated' });
    });
};

module.exports.deleteFlight = (req, res) => {
    Flight.findByIdAndRemove({ _id: req.params.id }, (err, hotel) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to delete flight' });
        }
        res.json({ success: true, msg: 'Flight deleted' });
    });
};
