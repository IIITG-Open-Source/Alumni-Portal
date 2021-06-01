import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import {Route,Link} from 'react-router-dom';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

const NavBar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >
                <Link to='/register'>Register</Link>
              </a>
            </li>
            
          </ul>
          
         
        </div>
      </nav>
    );
}


export default NavBar;