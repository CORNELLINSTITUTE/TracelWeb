const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');

/*********************/
//DATABASE CONNECTOR
/*********************/
//Connect to database
mongoose.connect(config.database, { useMongoClient: true });
mongoose.Promise = global.Promise;

//Check if the connection was stablished
mongoose.connection.on('connected', () => {
  console.log('Connected to database' + config.database);
});

/***************************************************/
//EXPRESS SETUP
/***************************************************/
//Set up express app
const app = express();

// access control allow methods permission
app.use(cors());
app.options('*', cors());
/***************************************************/
//REACT FOLDER
/***************************************************/
app.use(express.static('client'));

/***************************************************/
//BODY PARSER SETUP
/***************************************************/
//Define the JSON data type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/***************************************************/
//HEADER SETUP
/***************************************************/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/***************************************************/
//ROUTER PATH
/***************************************************/
//Define path to the route files
const person = require('./routes/person');
const user = require('./routes/user');
const country = require('./routes/country');
const region = require('./routes/region');
const city = require('./routes/city');
const flight = require('./routes/flight');
<<<<<<< HEAD
=======
const hotel = require('./routes/hotel');
const book = require('./routes/book');
>>>>>>> 6a2f37ce634aba059ab974d58a890366572258a8
const voucher = require('./routes/voucher');

//Access route file
app.use('/person', person);
app.use('/user', user);
app.use('/country', country);
app.use('/region', region);
app.use('/city', city);
app.use('/flight', flight);
<<<<<<< HEAD

=======
app.use('/hotel', hotel);
app.use('/book', book);
>>>>>>> 6a2f37ce634aba059ab974d58a890366572258a8
app.use('/voucher', voucher);

/***************************************************/
//ROUTERS
/***************************************************/
app.get('/', (req, res) => {
  console.log('GET request');
  res.send('DEFAULT');
})

//Error message for non-existing routes
app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


//Listen for requests
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log('now listening for requests on port: ' + port);
});
