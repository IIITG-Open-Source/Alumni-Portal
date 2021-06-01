import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './homepage/home';
import Register from './register/register';
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
       </Switch>
    </BrowserRouter>
    
  );
}

export default App;
