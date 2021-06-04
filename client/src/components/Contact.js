import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from '../navbar/navbar';

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email, linkedin, github } = formData;

  return (
    <div>
      <NavBar/>
    <Container maxWidth="xs">
      <h3><em>Contact details</em></h3>
      <TextField
        label="Phone number"
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
