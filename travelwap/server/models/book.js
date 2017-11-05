const mongoose = require('mongoose');

//Person Schema
const PersonSchema = mongoose.Schema({
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
  },
  phone:{
      type: String,
      required:true
  }
});

/*******************/
//FUNCTIONS
/*******************/
const Person = module.exports = mongoose.model('Person', PersonSchema);

//Get the person by Id
module.exports.getPersonById = (id, callback) => {
    Person.findById(id, callback);
}

//Add new Person
module.exports.addPerson = (newPerson, callback) => {
    newPerson.save(callback);    
}
