import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    residence,

    phone,
    email,
    linkedin,
    github,

    year,
    roll,
    tech,
    branch,

    occupation,
    workingAt,
    position,
    achievements
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h3><em>Review your details</em></h3>
      <RenderAccordion summary="Personal" go={ go } details={[
        { 'First Name': firstName },
        { 'Last Name': lastName },
        { 'Residence Country': residence },
      ]} />
      <RenderAccordion summary="Contact" go={ go } details={[
        { 'Phone Number': phone },
        { 'Email ID': email },
        { 'LinkedIn': linkedin },
        { 'GitHub': github },
      ]} />
      <RenderAccordion summary="College" go={ go } details={[
        { 'Year of Graduation': year },
        { 'Institute Roll Number': roll },
        { 'BTech / MTech / PhD': tech },
        { 'Branch': branch },
      ]} />
      <RenderAccordion summary="Professional" go={ go } details={[
        { 'Occupation': occupation },
        { 'Working at': workingAt },
        { 'Position': position },
        { 'Achievements': achievements },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '2rem', float: "right"  , fontSize: 12 }}
        onClick={() => go('submit')}
      >
        Submit
      </Button>

    </Container>
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
