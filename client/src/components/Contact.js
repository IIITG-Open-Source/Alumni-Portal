import React,{useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from '../navbar/navbar';

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email, linkedin, github } = formData;

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
    <div>
   
    <Container maxWidth="xs">
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
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
    </div>
  );
};
