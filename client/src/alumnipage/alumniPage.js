import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import girlImage from '../images/girl1.jpg';
import './alumniPage.css';
import axios from 'axios';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelope,faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faLinkedin,faTwitter,faInstagram, faMailchimp, faGithub} from '@fortawesome/free-brands-svg-icons'
import {InputGroup,FormControl,Dropdown,DropdownButton} from 'react-bootstrap'
const AlumniPage=()=>{
 
    const [alumnis,setAlumnis]=useState([])
    const [searchTerm,setSearchTerm]=useState("")
  
   
    const getAlumnis=async(filterBranch,filterDept,filterYear)=>{
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
       
       
      if(filterDept || filterBranch || filterYear)
      {
        if(filterBranch!==' ' && filterDept!==' ' && filterYear!==' '){
            console.log(filterBranch, filterDept)
            const updatedItems=data.filter((curItem)=>{
                return curItem.branch === filterBranch && curItem.dept === filterDept && curItem.year== filterYear
            });
            setAlumnis(updatedItems)
          }
         else  if(filterDept === ' '){
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
          else if(filterYear === ' '){
           // console.log('dept')
         /// console.log(filterBranch, filterDept)
          const updatedItems=data.filter((curItem)=>{
              return curItem.year=== filterYear
          });
          setAlumnis(updatedItems)
  
        }
    
      }


       
    }
    useEffect(()=>{
        getAlumnis();
    },[]);
    
   
    
    
    return(
            <div >
                <NavBar/>

                 
                <div class='container py-5 ' >
                <div class=' topFilter'>
             
                    <div class='d-flex flex-row align-items-center full-width'>
                        <input class='form-control searchItem ' 
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

                    <div>
                        <DropdownButton id="dropdown-basic-button" class='customDropdown' title="Course">
                            
                            <Dropdown.Item id="cse" name="course" value="cse"  onClick={()=>getAlumnis('CSE',' ',' ')}>CSE</Dropdown.Item>
                            <Dropdown.Item id="ece" name="course" value="ece"  onClick={()=>getAlumnis('ECE',' ',' ')}>ECE</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Branch">
                            <Dropdown.Item id="btech" name="branch" value="btech"  onClick={()=>getAlumnis(' ','B.Tech',' ')} >B. Tech</Dropdown.Item>
                            <Dropdown.Item id="mtech" name="branch" value="mtech"  onClick={()=>getAlumnis(' ','M.Tech',' ')}>M. Tech</Dropdown.Item>
                            <Dropdown.Item id="pHD" name="branch" value="pHD"  onClick={()=>getAlumnis(' ','pHD',' ')}>pHD</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Graduation Year">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    {/*<div class="dropdown searchItem">
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
                    </div>*/}
                 </div>
                   
                    <div class='alumniHolder'>
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
                               <div class='alumniCard' style={{'width':'40%'}}>
                                   <div class='d-flex flex-row justify-content-start align-items-center mb-4 alumniDet' >
                                   <img src={girlImage} style={{'width':'60px','height':'60px','borderRadius':'50%','objectFit':'cover'}}></img>
                                   <div class='d-flex flex-column justify-content-start ml-4' >
                                      <div class='d-flex flex-row justify-content-between align-items-center ' >
                                        <p style={{'font-size':'14px','fontWeight':'550'}}> {curitem.firstName} {curitem.lastName} </p>
                                        <p style={{'color':'grey','font-size':'10px','marginLeft':'8px','fontWeight':'550'}}>{curitem.dept}-{curitem.year} | {curitem.branch}</p>
                                      </div>
                                      <div class='work'>
                                         <p class='workDet' style={{'font-size':'12px','fontWeight':'550','color':'grey','width':'300px','overflow':'elipsis'}}>
                                             {curitem.occupation} at {curitem.workingAt},{curitem.residence} 
                                        </p>
                                      </div>
                                   </div>
                                   </div>
                               </div>
                            
                             )
                         })
                     }   
                
                                 
                      
                    </div>
                </div>
                <Footer/>
            </div>
    );
}

export default AlumniPage;