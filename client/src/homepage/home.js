import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import girlImage from '../images/girl1.jpg';
import './home.css';
import NavBar from '../navbar/navbar';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelope,faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faLinkedin,faTwitter,faInstagram, faMailchimp} from '@fortawesome/free-brands-svg-icons'

const Home=()=>{
    return(
            <div>
                <NavBar/>
                 <h1 class='text-center'>IIITG Alumni</h1>
                 
                <div class='container py-5 my-5'>
                <div class='flex-row d-flex justify-content-center align-items-center'>
                    <div class='searchItem d-flex flex-row align-items-center'>
                        <input class='form-control' placeholder='search..' type='text'></input>
                        <div class='searchIcon'>
                        <FontAwesomeIcon icon={faSearch}/>
                        </div>
                          
                    </div>
                    <div class="dropdown searchItem">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter By
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                 </div>
                   
                    <div class='d-flex flex-wrap my-5 justify-content-between'>
                    <div class="card" >
                        <img class="card-img img-fluid rounded" src={girlImage} alt="Card image cap"></img>
                        <div class="card-body ">
                            <h5 class="card-title">Priyanka Kumari</h5>
                            <p class="card-text">Working as a developer in DigiZen.</p>
                            <p class="card-text">priyanka.kumari@iiitg.ac.in</p>
                            <div class='d-flex flex-row justify-content-between align-items-center'>
                            
                            
                            </div>
                            <div class='d-flex flex-row justify-content-between'>
                                <a href='#'>
                                <FontAwesomeIcon  icon={faLinkedin}  size="lg"/>
                                </a>
                            <a href='#'>
                            <FontAwesomeIcon  icon={faFacebook} size="lg"  />
                            </a>
                           
                            <a href='#'>
                            <FontAwesomeIcon icon={faTwitter}  size="lg"/>
                            </a>
                            <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="card" >
                        <img class="card-img img-fluid rounded" src={girlImage} alt="Card image cap"></img>
                        <div class="card-body ">
                            <h5 class="card-title">Priyanka Kumari</h5>
                            <p class="card-text">Working as a developer in DigiZen.</p>
                            <p class="card-text">priyanka.kumari@iiitg.ac.in</p>
                            <div class='d-flex flex-row justify-content-between align-items-center'>
                            
                            
                            </div>
                            <div class='d-flex flex-row justify-content-between'>
                                <a href='#'>
                                <FontAwesomeIcon  icon={faLinkedin}  size="lg"/>
                                </a>
                            <a href='#'>
                            <FontAwesomeIcon  icon={faFacebook} size="lg"  />
                            </a>
                           
                            <a href='#'>
                            <FontAwesomeIcon icon={faTwitter}  size="lg"/>
                            </a>
                            <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                            </div>
                            
                        </div>
                    </div>
                                  <div class="card" >
                        <img class="card-img img-fluid rounded" src={girlImage} alt="Card image cap"></img>
                        <div class="card-body ">
                            <h5 class="card-title">Priyanka Kumari</h5>
                            <p class="card-text">Working as a developer in DigiZen.</p>
                            <p class="card-text">priyanka.kumari@iiitg.ac.in</p>
                            <div class='d-flex flex-row justify-content-between align-items-center'>
                            
                            
                            </div>
                            <div class='d-flex flex-row justify-content-between'>
                                <a href='#'>
                                <FontAwesomeIcon  icon={faLinkedin}  size="lg"/>
                                </a>
                            <a href='#'>
                            <FontAwesomeIcon  icon={faFacebook} size="lg"  />
                            </a>
                           
                            <a href='#'>
                            <FontAwesomeIcon icon={faTwitter}  size="lg"/>
                            </a>
                            <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="card" >
                        <img class="card-img img-fluid rounded" src={girlImage} alt="Card image cap"></img>
                        <div class="card-body ">
                            <h5 class="card-title">Priyanka Kumari</h5>
                            <p class="card-text">Working as a developer in DigiZen.</p>
                            <p class="card-text">priyanka.kumari@iiitg.ac.in</p>
                            <div class='d-flex flex-row justify-content-between align-items-center'>
                            
                            
                            </div>
                            <div class='d-flex flex-row justify-content-between'>
                                <a href='#'>
                                <FontAwesomeIcon  icon={faLinkedin}  size="lg"/>
                                </a>
                            <a href='#'>
                            <FontAwesomeIcon  icon={faFacebook} size="lg"  />
                            </a>
                           
                            <a href='#'>
                            <FontAwesomeIcon icon={faTwitter}  size="lg"/>
                            </a>
                            <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                            </div>
                            
                        </div>
                    </div>    <div class="card mt-5" >
                        <img class="card-img img-fluid rounded" src={girlImage} alt="Card image cap"></img>
                        <div class="card-body ">
                            <h5 class="card-title">Priyanka Kumari</h5>
                            <p class="card-text">Working as a developer in DigiZen.</p>
                            <p class="card-text">priyanka.kumari@iiitg.ac.in</p>
                            <div class='d-flex flex-row justify-content-between align-items-center'>
                            
                            
                            </div>
                            <div class='d-flex flex-row justify-content-between'>
                                <a href='#'>
                                <FontAwesomeIcon  icon={faLinkedin}  size="lg"/>
                                </a>
                            <a href='#'>
                            <FontAwesomeIcon  icon={faFacebook} size="lg"  />
                            </a>
                           
                            <a href='#'>
                            <FontAwesomeIcon icon={faTwitter}  size="lg"/>
                            </a>
                            <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </a>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default Home;