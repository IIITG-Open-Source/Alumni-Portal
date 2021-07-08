import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserFriends, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Card,CardGroup } from 'react-bootstrap';
import './homepage.css'
// import { IconName } from "react-icons/fa";

const Home=()=>{
    return(
        
        <div class='ContainerHolder' >
            <Navbar/>
            <div class="down-part">

                <div class="stay-connected">
                    Let’s stay connected IIITG
                </div>

                <div class="right">

                    IIITG has a strong, lively alumni association that extends across the globe. 
                    This thriving alumni network brings great value to everyone associated with IIITG 
                    – from spreading awareness and recognition of the PES brand to crating opportunities for and 
                    guiding current students. The IIITG website supports the alumni network. <br></br><br></br>
                    All a student needs to do is create an account and you can start connecting with our Alumni.

                    <h3 class="join-network">Join alumni network</h3>
                </div>
                
            </div>


            <CardGroup>

                <Card className="text-center" style={{width:"80%", height:"60%"}}>
                    <Card.Body>
                        <div class='searchIcon'>
                            <FontAwesomeIcon icon={faSearch} size="4x"/>
                        </div>
                    </Card.Body>
                    {/* <Card.Title style={{color:"#F4AF1B"}}> Search Alumni </Card.Title> */}
                    <Card.Header style={{color:"#F4AF1B"}}> <strong> Search Alumni </strong> </Card.Header>
                </Card>

                <Card className="text-center" style={{width:"80%", height:"60%"}}>
                    <Card.Body>
                        <div class='searchIcon'>
                            <FontAwesomeIcon icon={faUserFriends} size="4x"/>
                        </div>
                    </Card.Body>
                    <Card.Header style={{color:"#F4AF1B"}}> <strong> Join Alumni Network </strong> </Card.Header>
                </Card>

                <Card className="text-center" style={{width:"80%", height:"60%"}}>
                    <Card.Body>
                        <div class='searchIcon'>
                            <FontAwesomeIcon icon={faBriefcase} size="4x"/>
                        </div>
                    </Card.Body>
                    <Card.Header style={{color:"#F4AF1B"}}> <strong> Find/Post a Job </strong> </Card.Header>
                </Card>

            </CardGroup>
          
           <Footer/>
        </div>
    )
}

export default Home;