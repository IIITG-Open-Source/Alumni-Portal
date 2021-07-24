import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import AlumniPage from './alumnipage/alumniPage';
import HomePage from './homepage/homepage'
import Register from './components/Register';
import StudentRegister from './components/StudentRegister';
import BlogPage from './blog_alumni/blog'
import Login from './components/Login'
import CommonRegister from './components/commonRegister' 

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path='/' exact>
           <HomePage/>
         </Route>
         <Route path='/alumni/all' exact>
           <AlumniPage/>
         </Route>
         <Route path='/register' exact>
            <CommonRegister/>
         </Route>
        
         <Route path='/blogs' exact>
           <BlogPage/>
         </Route>
         <Route path='/login' exact>
           <Login/>
         </Route>
       </Switch>
    </BrowserRouter>
    
  );
}

export default App;
