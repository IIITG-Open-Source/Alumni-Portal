import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import { Personal } from "./stepForm/Personal";
import { Contact } from "./stepForm/Contact";
import { College } from "./stepForm/College";
import { Professional } from "./stepForm/Professional";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  residence: "",
  password1: "",
  password2: "",

  phone: "",
  email: "",
  linkedin: "",
  github: "",

  year: "",
  roll: "",
  tech: "",
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

const MultiStepForm = () => {
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

export default MultiStepForm;
