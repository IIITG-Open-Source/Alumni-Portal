import React,{useState}  from "react";
import { useForm, useStep } from 'react-hooks-helper';

import { StudentPersonal } from "./StudentPersonal";
import { StudentCollege } from "./StudentCollege";
import { StudentReview } from "./StudentReview";
import { Submit } from "./Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",

  year: "",
  roll: "",
  dept: "",
  branch: ""
};

  
const steps = [
  { id: "studentpersonal" },
  { id: "studentcollege" },
  { id: "studentreview" },
  { id: "submit" },
];

const StudentRegister = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "studentpersonal":
      return <StudentPersonal {...props} />;
    case "studentcollege":
      return <StudentCollege {...props} />;
    case "studentreview":
      return <StudentReview {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Registration form</h1>
    </div>
  );
};

export default StudentRegister;
