import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import NavBar from '../navbar/navbar';

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

  return (
    <div>
     
      <Container maxWidth="xs">
        <h3><em>Alumni Register</em></h3>
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
      </Container>
    </div>
  );
};
