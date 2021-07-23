import React,{useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import NavBar from '../navbar/navbar';
import {Card } from 'react-bootstrap';
import "./Personal.css"

export const Personal = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, residence, password } = formData;

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

  const [error,setError]=useState("");

  const Validation=()=>{
    console.log("clicked");
    const { year, roll, dept, branch } = formData;
    console.log(formData);
    if(year==="" || roll==="" || dept==="" || branch===""){
      setError("**required field is empty");
    }else{
      navigation.next()
    }
  } 

  return (
    <div className='pb-5 '>
     
      <Container maxWidth="xs" className='pb-5'>
       <Card>
       <h3 style={{'font-weight':'550'}}>Alumni Register</h3>
        <div id='dataInvalid' class='text-danger'>{error}</div>
        <input
          placeholder="First Name"
          
          name="firstName"
          id={firstName}
          value={firstName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          class='form-control'
          style={{'padding':'20px','fontSize':'12px !important'}}
          
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
        />
        <TextField
          label="Residence country"
          name="residence"
          id="residence"
          value={residence}
          onChange={setForm}
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
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          <i onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</i>{" "}
        </div>

        <Button onclick="return validate()"
          variant="contained"
          color="primary"
          style={{ marginTop: "2rem" , float: "right" , fontSize: 12 }}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
       </Card>
      </Container>
    </div>
  );
};
