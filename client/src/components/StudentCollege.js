import React,{useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import NavBar from '../navbar/navbar';


/* const depts = [
  {
    value: 'BTech',
    label: 'BTech',
  },
  {
    value: 'MTech',
    label: 'MTech',
  },
  {
    value: 'PhD',
    label: 'PhD',
  }
]; */


export const StudentCollege = ({ formData, setForm, navigation }) => {
  const { year, roll, dept, branch } = formData;

  /* const [dept, setDept] = React.useState('BTech');

  const handleChange = (event) => {
    setDept(event.target.value);
  }; */

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
      <h3><em>College details</em></h3>
      <div id='dataInvalid' class='text-danger'>{error}</div>
      <TextField
        label="Year of Graduation"
        name="year"
        value={year}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
      <TextField
        label="Institute Roll Number"
        name="roll"
        value={roll}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />

      <TextField
       label="Department"
       placeholder="BTech / MTech / PhD"
       name="dept"
       value={dept}
       onChange={setForm}
       margin="normal"
       variant="outlined"
       autoComplete="off"
       fullWidth
       required
      /*  label="Department"
          select
          name="dept"
          value={dept}
          id="dept"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth        
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          *</Container>{depts.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </TextField>*/
        />
          
      
      <TextField
        label="Branch"
        placeholder="CSE / ECE / other"
        name="branch"
        value={branch}
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
          style={{  float: "left"  , fontSize: 12 }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{  float: "right"  , fontSize: 12 }}
          color="primary"
          variant="contained"
          onClick={Validation}
        >
          Next
        </Button>
      </div>
    </Container>
    </div>
    
  );
};
