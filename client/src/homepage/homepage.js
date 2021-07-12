import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './homepage.css'

const Home=()=>{
    return(
        
        <div class='ContainerHolder' >
            <Navbar/>
            
            <div class="alumni">
                <img   height={530} width={1536} />

                <div className='new-line'  width={300}>
                     <h1 class="Alumni_heading1"> Alumni @ IIITG</h1>
                     <h2  class="Alumni_heading2">{"\n"}Welcome! Explore the many{"\n"}
                     ways to connect with the college{"\n"}
                     and our 23,000 alumni.{"\n"}
                     <canvas id="my-canvas" width="400" height="2" ></canvas>
                     </h2>
                     
                     
                </div> 
            </div>

           <Footer/>
        </div>
    )
}

export default Home;