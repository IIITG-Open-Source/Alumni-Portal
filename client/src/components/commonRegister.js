import React,{useState} from 'react';
import Register  from './Register';
import StudentRegister from "./StudentRegister";
import NavBar from '../navbar/navbar';
const CommonRegister=()=>{

    const[form,setForm]=useState('');
    
    let chooseForm;
    if(form==='student'){
        console.log('stuform')
        chooseForm=<div><StudentRegister/></div>
    }else{
        chooseForm=<div><Register/></div>
    }
   return(
       <div>
       <div>
            <NavBar/>
       </div>
       <div class='container text-center py-3 my-3'>
          
           <h2>Register</h2>
           <div class='d-flex flex-row justify-content-center align-items-center'>
                <div class='mr-5'>
                        <input onClick={()=>setForm('student')} type='radio' name='userType' value='student'></input>
                        <label for='student'>Student</label>
                </div>
                <div>
                        <input onClick={()=>setForm('Alumni')} type='radio' name='userType' value='alumni'></input>
                        <label for='alumni'>Alumni</label>
                </div>
           </div>
           <div>
               {chooseForm}
           </div>
           
       </div>
       </div>
   );
}

export default CommonRegister;