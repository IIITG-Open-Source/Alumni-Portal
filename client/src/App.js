import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './homepage/home';
import Register from './components/Register';
import BlogPage from './blog_alumni/blog'

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
         <Route path='/blogs' exact>
           <BlogPage/>
         </Route>
       </Switch>
    </BrowserRouter>
    
  );
}

export default App;
