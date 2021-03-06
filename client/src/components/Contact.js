import React,{useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from '../navbar/navbar';
import {Card } from 'react-bootstrap';
export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email, linkedin, github } = formData;

  const [error,setError]=useState("");

  const Validation=()=>{
    console.log("clicked");
    const { phone, email, linkedin, github } = formData;
    console.log(formData);
    if(phone==="" || email==="" || linkedin==="" || github===""){
      setError("**required field is empty");
    } else {
      if(!phone.includes("+")) {
        setError("**enter country code in phone number")
      }
      else if(!(/^\+[0-9]+$/).test(phone))
        setError("**enter correct phone no.");
      else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)))
        setError("**enter correct email");
      else{
        navigation.next()
      }
    }
  }

  return (
    <div className='pb-5'>
   
    <Container maxWidth="xs" className='pb-5'>
      <Card>
      <h3><em>Contact details</em></h3>
      <div id='dataInvalid' class='text-danger'>{error}</div>
      <TextField
        label="Phone number"
        placeholder="Give the country code as well"
        name="phone"
        value={phone}
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
      <TextField
        label="LinkedIn"
        name="linkedin"
        value={linkedin}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
      <TextField
        label="GitHub"
        name="github"
        value={github}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
      <div style={{ marginTop: "2rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ float: "left" , fontSize: 12}}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{float: "right"  , fontSize: 12}}
          color="primary"
          variant="contained"
          onClick={Validation}
        >
          Next
        </Button>
      </div>
      </Card>
    </Container>
    </div>
  );
};
