const mongoose = require('mongoose');

//Person Schema
const BookSchema = mongoose.Schema({
  user_id:{
      type: mongoose.Schema.Types.ObjectId,
      required:true
  },
  username:{
      type: String,
      required:true
  },
  type_id:{
      type: mongoose.Schema.Types.ObjectId,
      required:true
  },
  type_name:{
      type: String,
      required:true
  }
});

/*******************/
//FUNCTIONS
/*******************/
const Book = module.exports = mongoose.model('Book', BookSchema);

//Get the Booking by Id
module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback);
}

//Add new Booking
module.exports.addBook = (newBook, callback) => {
    newBook.save(callback);    
}
