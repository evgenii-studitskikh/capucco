import React from 'react';

import {
  Label,
  Field,
} from './styled';

interface IInputProps {
  label: string,
}

export default class Input extends React.Component<IInputProps> {
  
  public render() {

    const {
      label,
    } = this.props;

    return (
        <Label>
          {label}
          <Field />
        </Label>       
    )
  }
}