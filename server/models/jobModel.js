const mongoose = require('mongoose')

const Schema= mongoose.Schema

const JobSchema = new Schema({
    JobRole:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    TypeOfJob:{
        type:String,
        required:true
    },
    Tenure:{
        type:String
    },
    Salary:{
        type:String,
        required:true
    },
    SkillsRequired:{
        type:String,
        required:true


    }

})


const Job= mongoose.model('Job',JobSchema)
module.exports=Job