/* import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import NavBar from '../navbar/navbar';

export const Login = ({ formData, navigation }) => {
    const { email, password } = formData;
    const { go } = navigation;

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <div>
          <NavBar/>
          <Container maxWidth="xs">
            <h3><em>Login</em></h3>
            <TextField
              label="Email ID"
              name="email"
              value={email}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
            <div className="pass-wrapper">
                {" "}
                <TextField
                    label="Password"
                    name="password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                <i onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</i>{" "}
            </div>
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "2rem" , float: "right" , fontSize: 12 }}
                onClick={() => go('home')}
            >
                Login
            </Button>
          </Container>

        </div>
  );
};
 */


import React, { useState } from 'react';
import NavBar from '../navbar/navbar';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Navbar,NavDropdown,FormControl,Nav,Form,Card } from 'react-bootstrap';
const Login = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name:"",email:""});
    const [error, setError] = useState("");

    const login = details => {
        console.log(details);
    }

    const logout = () => {
        console.log("Logout");
    }

    return (
        <div >
               <div className="Login">
            <NavBar/>
            <Container maxWidth="xs" className='pt-5'>
                <Card>
                <h2 className='fw-bold'>Login</h2><br/>
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>welcome <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                
                <form>
                    <div class="form-body">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div><br/>
                        
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>

                        <div style={{'width':'100%'}}>
                        <button type="submit" class="btn mt-4 text-center col-lg-12" style={{'background-color':'#F4AF1B','font-weight':'550'}}>Submit</button>
                        </div>
                        

                    </div>
                    
                </form>
                
            )
            }
                </Card>
           </Container>
        </div>
        </div>
    )
}
export default Login;