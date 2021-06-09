const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const studentSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    year: {
      type: Number,
      required: true
    },
    roll: {
      type: Number,
      required: true,
      unique: true
    },
    dept: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    } 
  }, 
  {
    timestamps: true,
  });
  
  const Student = mongoose.model('Student',studentSchema);
  module.exports = Student;