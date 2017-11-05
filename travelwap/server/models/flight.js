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
    region:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    travelDate:{
        type: Date,
        required:true
    },
    bookBy:{
        type: Date,
        required:true
    }   
});

/*******************/
//FUNCTIONS
/*******************/
const Flight = module.exports = mongoose.model('Flight', FlightSchema);

//Get the country by Id
module.exports.getFlightById = (id, callback) => {
    Flight.findById(id, callback);
}

