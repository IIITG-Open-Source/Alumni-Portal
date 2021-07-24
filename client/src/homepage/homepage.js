import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserFriends, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Card,CardGroup ,Container} from 'react-bootstrap';
import './homepage.css'
// import { IconName } from "react-icons/fa";

const Home=()=>{
    return(
        
        <div  >
           
            
      
           
            <Navbar/>
           <div class="alumni">
                <img   height={530} width={'100%'} />

                <div className='new-line' >
                     <h1 class="Alumni_heading1"> Alumni @ IIITG</h1>
                     <h2  class="Alumni_heading2">{"\n"}Welcome! Explore the many{"\n"}
                     ways to connect with the college{"\n"}
                     and our 23,000 alumni.{"\n"}
                     <canvas id="my-canvas" width="100%" height="0.5" ></canvas>
                     </h2>
                     
                     
                </div> 
    </div>      
    
      
         <div class=" down-part">

                <div class='col-lg-5 col-md-12 col-sm-12 col-xs-12 stay-connected' >
                    Let’s stay connected IIITG
                </div>

                <div class='col-lg-6 col-md-12 col-sm-12 col-xs-12 right' >

                    IIITG has a strong, lively alumni association that extends across the globe. 
                    This thriving alumni network brings great value to everyone associated with IIITG 
                    – from spreading awareness and recognition of the PES brand to crating opportunities for and 
                    guiding current students. The IIITG website supports the alumni network. <br></br><br></br>
                    All a student needs to do is create an account and you can start connecting with our Alumni.

                    <p class="join-network">Join alumni network</p>
                </div>
                
            </div>
         
            

            <Container >
                    <CardGroup class='py-5 my-5 cardsgroup '>

                        <Card className="text-center cards" >
                            <Card.Body>
                                <div class='searchIcon'>
                                    <FontAwesomeIcon icon={faSearch} size="3x"/>
                                </div>
                            </Card.Body>
                            
                            <Card.Header style={{color:"#F4AF1B", width:'100%'}}> <strong> Search Alumni </strong> </Card.Header>
                        </Card>

                        <Card className="text-center cards " >
                            <Card.Body>
                                <div class='searchIcon'>
                                    <FontAwesomeIcon icon={faUserFriends} size="3x"/>
                                </div>
                            </Card.Body>
                            <Card.Header style={{color:"#F4AF1B", width:'100%'}}> <strong> Join Alumni Network </strong> </Card.Header>
                        </Card>

                        <Card className="text-center cards " >
                            <Card.Body>
                                <div class='searchIcon'>
                                    <FontAwesomeIcon icon={faBriefcase} size="3x"/>
                                </div>
                            </Card.Body>
                            <Card.Header style={{color:"#F4AF1B" ,width:'100%'}}> <strong> Find/Post a Job </strong> </Card.Header>
                        </Card>

                        </CardGroup>
            </Container>

             <Footer/>
        
          
            



          
        </div>
    )
}

export default Home;