import React from "react";
import Container from '@material-ui/core/Container';
import NavBar from '../navbar/navbar';

export const Submit = () => {
  return (
    <div>
      <NavBar/>
      <Container maxWidth="sm" style={{ textalign:'center' }}>
        <h3><em><strong>You've been registered successfully!</strong></em></h3>
      </Container>
    </div>
  );
};
