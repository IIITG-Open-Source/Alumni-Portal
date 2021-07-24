import React,{useState} from 'react';
import Register  from './Register';
import StudentRegister from "./StudentRegister";
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer'
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
       <div className='pb-5'>
       <div>
            <NavBar/>
       </div>
       <div >
       <h2 className='px-5 fw-bold pt-4'>Register</h2>
       <div class='container text-center  my-3'>
          
          
           <div class='d-flex flex-row justify-content-center align-items-center'>
                <div class='mr-5'>
                        <input onClick={()=>setForm('student')} type='radio' name='userType' value='student'></input>
                        <label className='ml-2' for='student' style={{'color':'#003366','font-weight':'bold'}}>Student</label>
                </div>
                <div>
                        <input onClick={()=>setForm('Alumni')} type='radio' name='userType' value='alumni'></input>
                        <label className='ml-2' for='alumni' style={{'color':'#003366','font-weight':'bold'}}>Alumni</label>
                </div>
           </div>
           <div>
               {chooseForm}
           </div>
           
       </div>
       </div>
         <Footer/>
       </div>
   );
}

export default CommonRegister;