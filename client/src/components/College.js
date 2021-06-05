import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from '../navbar/navbar';

export const College = ({ formData, setForm, navigation }) => {
  const { year, roll, tech, branch } = formData;

  return (
    <div>
      <NavBar/>
    <Container maxWidth="xs">
      <h3><em>College details</em></h3>
      <TextField
        label="Year of Graduation"
        name="year"
        value={year}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
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
      />
      <TextField
        label="BTech / MTech / PhD"
        name="tech"
        value={tech}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Branch"
        name="branch"
        value={branch}
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
          style={{  float: "left"  , fontSize: 12 }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{  float: "right"  , fontSize: 12 }}
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