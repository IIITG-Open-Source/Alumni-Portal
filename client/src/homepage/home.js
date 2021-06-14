import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import girlImage from '../images/girl1.jpg';
import './home.css';
import axios from 'axios';
import NavBar from '../navbar/navbar';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelope,faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faLinkedin,faTwitter,faInstagram, faMailchimp, faGithub} from '@fortawesome/free-brands-svg-icons'

const Home=()=>{
 
    const [alumnis,setAlumnis]=useState([])
    const [searchTerm,setSearchTerm]=useState("")
  
   
    const getAlumnis=async(filterBranch,filterDept)=>{
       /*axios.get('/api')
       .then((response)=>{
           console.log("DATA")
           console.log(response.data)
           setAlumnis(prevAlumni=>([...prevAlumni,...response.data]))
           console.log("alumni data")
           console.log(alumnis)
          
           
       })
       .catch((err)=>{
           console.log(err)
       })*/
       const response= await fetch('/api');
       const data=await response.json()
    
       console.log(data)
    
      
       setAlumnis(data)
      
       console.log(alumnis)
       
       
      if(filterDept || filterBranch)
      {
        if(filterBranch!==' ' && filterDept!==' '){
            console.log(filterBranch, filterDept)
            const updatedItems=data.filter((curItem)=>{
                return curItem.branch === filterBranch && curItem.dept === filterDept
            });
            setAlumnis(updatedItems)
          }
           if(filterDept === ' '){
            console.log(filterBranch, filterDept)
            const updatedItems=data.filter((curItem)=>{
                return curItem.branch === filterBranch 
            });
            setAlumnis(updatedItems)
    
          }else if(filterBranch === ' '){
              console.log('dept')
            console.log(filterBranch, filterDept)
            const updatedItems=data.filter((curItem)=>{
                return curItem.dept === filterDept
            });
            setAlumnis(updatedItems)
    
          }
    
      }


       
    }
    useEffect(()=>{
        getAlumnis();
    },[]);
    
   
    
    
    return(
            <div>
                <NavBar/>
                 <h1 class='text-center'>IIITG Alumni</h1>
                 
                <div class='container py-5 my-5'>
                <div class='flex-row d-flex justify-content-center align-items-center'>
                    <div class='searchItem d-flex flex-row align-items-center'>
                        <input class='form-control' 
                        placeholder='search..' 
                        type='text'
                        onChange={event=>{
                            setSearchTerm(event.target.value)
                        }}
                        ></input>
                        <div class='searchIcon'>
                        <FontAwesomeIcon icon={faSearch}/>
                        </div>
                          
                    </div>
                    <div class="dropdown searchItem">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter By
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item d-flex flex-row justify-content-between" href="#">Department
                            <input type="radio" id="btech" name="gender" value="btech"  onClick={()=>getAlumnis(' ','B.Tech')}/>
                            <label for="btech">B.Tech</label>
                            <input type="radio" id="mtech" name="gender" value="mtech"  onClick={()=>getAlumnis(' ','M.Tech')}/>
                            <label for="mtech">M.Tech</label>
                            <input type="radio" id="phd" name="gender" value="phd"  onClick={()=>getAlumnis(' ','phD')}/>
                            <label for="phd">phD</label>
                            </a>
                            <a class="dropdown-item" href="#">Passout Year</a>
                            <a class="dropdown-item" href="#">Branch
                            <input type="radio" id="cse" name="branch" value="cse" onClick={()=>getAlumnis('CSE',' ')}/>
                            <label for="cse">CSE</label>
                            <input type="radio" id="ece" name="branch" value="ece"  onClick={()=>getAlumnis('ECE',' ')}/>
                            <label for="ece">ECE</label>
                             </a>
                             
                        </div>
                    </div>
                 </div>
                   
                    <div class='d-flex flex-wrap my-5 justify-content-between'>
                     {
                         alumnis.filter((val)=>{
                             if(searchTerm===""){
                                 return val;
                             }
                             else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                                  return val;
                             }
                         }).map((curitem)=>{
                             return(
                                <div class="card" >
                                <img class="card-img img-fluid rounded" src={girlImage} alt="Card image cap"></img>
                                <div class="card-body ">
                                    <h5 class="card-title">{curitem.firstName} {curitem.lastName} | {curitem.dept}-{curitem.year}| {curitem.branch}</h5>
                                    <p class="card-text">Working as a {curitem.occupation} in {curitem.workingAt}({curitem.residence}).</p>
                                    <p class="card-text">{curitem.email}</p>
                                    <div class='d-flex flex-row justify-content-between align-items-center'>
                                    
                                    <p>{curitem.achievements}</p>
                                    </div>
                                    <div class='d-flex flex-row justify-content-start'>
                                        <a href={curitem.linkedin}>
                                        <FontAwesomeIcon  icon={faLinkedin}  size="lg"/>
                                        </a>
                                    <a href={curitem.github}>
                                    <FontAwesomeIcon  icon={faGithub} size="lg"  />
                                    </a>
                                   
                                  
                                    </div>
                                    
                                 </div>
                                 
                            </div>
                             )
                         })
                     }   
                
                                 
                      
                    </div>
                </div>
            </div>
    );
}

export default Home;