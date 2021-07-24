import React from "react";
import Container from '@material-ui/core/Container';
import NavBar from '../navbar/navbar';

export const Submit = () => {
  return (
    <div className='pb-5'>
      
      <Container maxWidth="sm" style={{ textalign:'center' }} className='pb-5'>
        <h3><em><strong>You've been registered successfully!</strong></em></h3>
      </Container>
    </div>
  );
};
