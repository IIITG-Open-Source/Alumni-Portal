import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './homepage.css'

const Home=()=>{
    return(
        
        <div class='ContainerHolder' >
            <Navbar/>
            <div >
            <h1>Home</h1>
            </div>
          
           <Footer/>
        </div>
    )
}

export default Home;