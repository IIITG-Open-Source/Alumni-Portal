import React,{useState} from 'react';
import NavBar from '../navbar/navbar';

import './blog.css';
const blogPage=()=>{
  return(
    <div>
      <NavBar/>
        <div class="header">
         <h2>write a Post...🖉 </h2>
       </div>
       <div class='row'>
        <div class="leftcolumn">
            <div class="card">
              <h2>➤ POST 1 </h2>
              <h5>Title description, Date</h5>
              <div class="fakeimg" style={{height:'200 px'}}>Image</div>
              <p>abc text..</p>
              <p>Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div class="card">
                <h2>➤ POST 2</h2>
                <h5>Title description, Date</h5>
                <div class="fakeimg" style={{height:'200 px'}}>Image</div>
                <p>abc text..</p>
                <p>Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>
        <div class='rightcolumn'>
            <div class="card">
              <h3>Other Recent Posts</h3>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div><br/>
              <div class="fakeimg">Image</div>
            </div>
        </div>
    


       </div>
    </div>
  );

}

export default blogPage;