import React from "react";
import { Field } from "react-final-form";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const renderFields = ({ meta, input, id, label, ...others }) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        id={id}
        {...input}
        {...others}
        valid={meta.touched && meta.valid}
        invalid={meta.touched && meta.invalid}
      />
      <FormFeedback>{meta.error}</FormFeedback>
    </FormGroup>
  );
};

const InputField = props => <Field {...props} render={renderFields} />;

export default InputField;
