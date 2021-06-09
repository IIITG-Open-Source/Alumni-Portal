const express = require('express');
const router= express.Router();
require ('../db/conn');
const Alumni = require('../models/alumniModel')
router.get('/',(req,res)=>{
    res.send(`Hello world from the server router js`);

})
router.post('/register',(req,res)=>{
  //  console.log(req.body);
    //console.log(req.body.firstName);
    const{firstName, lastName, residence, password ,phone, email, 
        linkedin, github,year, roll,dept,
         branch,occupation, workingAt, position,
          achievements}=req.body

          console.log(req.body.firstName);
          console.log(req.body.lastName);
          console.log(req.body.residence);
          console.log(req.body.password);
          console.log(req.body.phone);
          console.log(req.body.email);
          console.log(req.body.linkedin);
          console.log(req.body.github);
          console.log(req.body.year);
          console.log(req.body.roll);
          console.log(req.body.dept);
          console.log(req.body.branch);
          console.log(req.body.workingAt);
          console.log(req.body.position);
          console.log(req.body.achievements);
          

  if(!firstName || !lastName || !residence || !password || !phone || !email || !linkedin || !github || !year || !roll || !dept || !branch || !occupation || !workingAt || !position || !achievements){
        return res.status(422).json({error:"No field can be empty"});
    }
    Alumni.findOne({email:email})
    .then((alumniExist)=>{
        if(alumniExist){
            return res.status(422).json({error:"Alumni already registered"})
        }
        const alumni = new Alumni({firstName, lastName, residence, password ,phone, email, linkedin, github,year, roll,dept, branch,occupation, workingAt, position, achievements})
    alumni.markModified();
    alumni.save().then(()=>{
        res.status(201).json({message:'Alumni registered'})
    }).catch((err)=>res.status(500).json({error:"Failed to register"}));
    }).catch((err)=>{console.log(err)})

    

   
})
module.exports=router;