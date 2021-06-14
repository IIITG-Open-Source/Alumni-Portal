import React,{useState}from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import NavBar from '../navbar/navbar';

import "./Personal.css"

export const StudentPersonal = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, email, password } = formData;

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [error,setError]=useState("");

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const Validation=()=>{
    console.log("clicked");
    const { firstName, lastName, email, password } = formData;
    console.log(formData);
    if(firstName==="" || lastName==="" || email==="" || password===""){
      setError("**required field is empty");
    }else{
      navigation.next()
    }
  } 


  return (
    <div>
      <NavBar/>
      <Container maxWidth="xs">
        <h3><em>Create your account</em></h3>
        <div id='dataInvalid' class='text-danger'>{error}</div>
        <TextField
          label="First Name"
          style={{ fontSize: 13 }}
          name="firstName"
          id={firstName}
          value={firstName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          required
        />
        
        <TextField
          label="Last Name"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          required
        />
        
        <TextField
            label="Email ID"
            name="email"
            value={email}
            type="email"
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            required
        />
        <div className="pass-wrapper">
          {" "}
          <TextField
            label="Password"
            name="password"
            type={values.showPassword ? "text" : "password"}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            required
          />
          <i onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</i>{" "}
        </div>
       

        <Button 
          variant="contained"
          color="primary"
          style={{ marginTop: "2rem" , float: "right" , fontSize: 12 }}
         
          onClick={Validation}
        >
          Next
        </Button>
      </Container>
    </div>
  );
};
