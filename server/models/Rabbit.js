let mongoose = require('mongoose');

mongoose.model('Rabbit', new mongoose.Schema({

  name:{type: String, required:true, minlength:2, maxlength:255},
  color:{type: String, required:true, minlength:2, maxlength:255}

},{timestamps: true})); 
