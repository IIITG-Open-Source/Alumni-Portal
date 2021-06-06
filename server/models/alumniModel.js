const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumniSchema = new Schema({
  
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  residence: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  phone: {
    type: Number,
    required: true,
    minLength: 10
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  linkedin: {
    type: String,
    required: true,
    unique: true
  },
  github: {
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
  },
  occupation: {
    type: String,
    required: true
  },
  workingAt: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  achievements: {
    type: String,
    required: true
  }
  
}, {
  timestamps: true,
});

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;