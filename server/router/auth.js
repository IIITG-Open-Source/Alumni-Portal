const express = require('express');
const router= express.Router();

const bcrypt = require('bcryptjs');

require ('../db/conn');
const Alumni = require('../models/alumniModel')
router.get('/api',(req,res)=>{
    //res.send(`Hello world from the server router js`);
    Alumni.find({ })
      .then((data)=>{
          console.log(data);
          res.json(data);
      })
      .catch((err)=>{
          console.log(err);
      })

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

//login route
router.post('/login',async (req,res)=>{
    //console.log(req.body);
    //res.json({message:"welcm back"});
    try{
        const {email,password}=req.body;

        if(!email || !password){ 
            return res.status(400).json({error:"Plz fill the credentials properly"})
        }
        const alumniLogin = await Alumni.findOne({email:email});
        //console.log(alumniLogin);
        
        if(alumniLogin){

            const isMatch = await bcrypt.compare(password,alumniLogin.password);
        
            if(!isMatch){
                res.json({message: "Alumni error"})
        
            }else{
                res.json({message: "Alumni Signin Successfully"})
            }
    
        }else{
            res.status(400).json({error: "Invalid Credentials"});
        }
   }catch(err){
        console.log(err);
    }

});


module.exports=router; 

    

   
})
module.exports=router;

