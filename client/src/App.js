import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './homepage/home';
//import Register from './register/register';
import Multistepform from './components/multistepform';
import BlogPage from './blog_alumni/blog'

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path='/' exact>
           <Home/>
         </Route>
         <Route path='/register' exact>
            <Multistepform/>
         </Route>
         <Route path='/blogs' exact>
           <BlogPage/>
         </Route>
       </Switch>
    </BrowserRouter>
    
  );
}

export default App;
