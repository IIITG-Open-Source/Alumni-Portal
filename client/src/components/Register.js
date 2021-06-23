import React,{useState}  from "react";
import { useForm, useStep } from 'react-hooks-helper';

import { Personal } from "./Personal";
import { Contact } from "./Contact";
import { College } from "./College";
import { Professional } from "./Professional";
import { Review } from "./Review";
import { Submit } from "./Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  residence: "",
  password: "",

  phone: "",
  email: "",
  linkedin: "",
  github: "",

  year: "",
  roll: "",
  dept: "",
  branch: "",

  occupation: "",
  workingAt: "",
  position: "",
  achievements: ""
};

  
const steps = [
  { id: "personal" },
  { id: "contact" },
  { id: "college" },
  { id: "professional" },
  { id: "review" },
  { id: "submit" },
];

const Register = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "college":
      return <College {...props} />;
      case "professional":
        return <Professional {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Registration form</h1>
    </div>
  );
};

export default Register;
