const mongoose = require('mongoose');

//Flight Schema
const CruiseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ship: {
        type: String,
        required: true
    },
    departingInfo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    journey: {
        type: String,
        required: true
    },
    departureDate: {
        type: String,
        require: true
    },
    travelDate: {
        type: Date,
        required: true
    },
    itinerary: [
        {
            day: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            port: {
                type: String,
                required: true
            },
            arrive: {
                type: String,
                required: true
            },
            depart: {
                type: String,
                required: true
            }
        }
    ]
});

/*******************/
//FUNCTIONS
/*******************/
const Flight = module.exports = mongoose.model('Flight', FlightSchema);

module.exports.add = (req, res) => {
    let flight = new Flight(req.body);

    flight.save((err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add flight', flight: flight });
        }
        else {
            res.json({ success: true, msg: 'Flight created' });
        }
    });
};

module.exports.update = (req, res) => {
    Flight.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to update flight' });
        } else {
            res.json({ success: true, msg: 'Flight updated' });
        }
    });
};

module.exports.delete = (req, res) => {
    Flight.findByIdAndRemove({ _id: req.params.id }, (err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to delete flight' });
        }
        else {
            res.json({ success: true, msg: 'flight deleted' });
        }
    });
};

module.exports.getAll = (req, res) => {
    Flight.find({}, (err, flights) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to retrieve flights' });
        } else {
            res.json({ flights });
        }

    });
};

module.exports.get = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to retrieve flight' });
        } else {
            res.json({ flight });
        }

    });
};

module.exports.getByRegion = (req, res) => {
    Flight.find({ region: req.params.region }, (err, flights) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to retrieve flights' });
        } else {
            res.json({ flights });
        }
    });
};
