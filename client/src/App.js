import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './homepage/home';
import Register from './components/Register';
import StudentRegister from './components/StudentRegister';
import BlogPage from './blog_alumni/blog'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path='/' exact>
           <Home/>
         </Route>
         <Route path='/register' exact>
            <Register/>
         </Route>
         <Route path='/studentRegister' exact>
            <StudentRegister/>
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
