const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
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


alumniSchema.pre('save',async function(next){
     try{
       console.log('befre saving the user')
       const salt = await bcrypt.genSalt(10)
       console.log(this.email, this.password)
       const hashedPassword = await bcrypt.hash(this.password,salt)
       console.log(hashedPassword)
       this.password=hashedPassword
       console.log(this.password)
       next()

     }catch(err){
       console.log(err)
       next(err)
     }

})


const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;