import React,{useState} from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import NavBar from '../navbar/navbar';

export const StudentReview = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    email,
    password,

    year,
    roll,
    dept,
    branch
  } = formData;
  const PostData=async(e)=>{
    e.preventDefault;
    console.log(formData)
   
    const res= await fetch('/studentRegister',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName,
        lastName,
        email,
        password,
    
        year,
        roll,
        dept,
        branch        
      })

    }).then((result)=>{
      console.log(result)
      result.json().then((resp)=>{
        console.warn(resp)
        

      })
    });
    /*const data= await res.json();
    if(data.status=== 422 || !data){
      window.alert('Invalid registration')
      console.log('invalid registration')
    }*/

  }
  return (
    <div>
      
      <Container maxWidth='sm'>
      <h3><em>Review your details</em></h3>
      <RenderAccordion summary="StudentPersonal" go={ go } details={[
        { 'First Name': firstName },
        { 'Last Name': lastName },
        { 'Email ID': email },
        
      ]} />
      <RenderAccordion summary="StudentCollege" go={ go } details={[
        { 'Year of Graduation': year },
        { 'Institute Roll Number': roll },
        { 'Department': dept },
        { 'Branch': branch },
      ]} />
      
      <div style={{ marginTop: "2rem" }}>
        <Button
            color="secondary"
            variant="contained"
            style={{ float: "left", fontSize: 12 }}
            onClick={() => navigation.previous()}
          >
            Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ float: "right"  , fontSize: 12 }}
          onClick={PostData}
        >
          Submit
        </Button>
        </div>

    </Container>
    </div>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
