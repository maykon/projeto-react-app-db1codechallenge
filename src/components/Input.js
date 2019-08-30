import React from 'react';

import { FormGroup, Label, Input as InputReactstrap } from 'reactstrap'

const Input = ({label, id, ...props}) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <InputReactstrap id={id} {...props} />
  </FormGroup>
);

export default Input;
