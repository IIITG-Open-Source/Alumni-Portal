import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import {Route,Link} from 'react-router-dom';
import header from '../images/header.svg'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { Navbar,NavDropdown,FormControl,Button,Nav,Form } from 'react-bootstrap';
import './navbar.css'
import $ from 'jquery'
const NavBar=()=>{
    $(document).ready(function(){
      console.log('ready')
      var ht= $('.JoinUs').height()
      console.log(ht)
      $(window).scroll(function(){
        if($(this).scrollTop() > ht){
          $('.color-nav').addClass('fixed')
          console.log('hey')
        }else{
          $('.color-nav').removeClass('fixed')
          console.log('hi')
        }
      })
    })

    return(
        
      <div>
        <div className='JoinUs' style={{'background-color':'#003366','padding-right':'80px'}}>
          <div class='d-flex justify-content-end align-items-center' >
            <p className='JoinUsBtn'  style={{'background-color':'#F4AF1B'}}>Join Us Today</p>
          </div>
        </div>
        <Navbar collapseOnSelect  expand="lg" className='color-nav'>
  <Navbar.Brand >
  <img
        src={header}
        width="567"
        
        style={{'max-width':'100%'}}
        className="d-inline-block align-top img-fluid img-responsive headerImg"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{'outline':'none !important','border':'none !important'}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">
        <Link to='/' style={{'text-decoration':'none ','color':'#003366'}}>Home</Link>
      </Nav.Link>
      
      <NavDropdown title="Alumni" id="basic-nav-dropdown">
        <NavDropdown.Item >
          <Link to='/alumni/all' style={{'text-decoration':'none ','color':'#003366'}}>Alumni Directory</Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link" >
        <Link to='/login'style={{'text-decoration':'none ','color':'#003366'}} >Login</Link>
      </Nav.Link>
      <Nav.Link href="#link">
        <Link to='/register' style={{'text-decoration':'none ','color':'#003366'}}>Register</Link>
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    );
}


export default NavBar;