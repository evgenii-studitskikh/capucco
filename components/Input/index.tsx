import React from 'react';

import {
  Label,
  Field,
} from './styled';

interface IInputProps {
  label: string,
  top?: string,
  required?: boolean,
  type?: string,
  value: string,
  onChange: (value: string) => void,
}

export default class Input extends React.Component<IInputProps> {
  
  public render() {

    const {
      label,
      top,
      value,
      type,
      onChange,
      required,
    } = this.props;

    return (
      <Label top={top}>
        {label}
        <Field
          value={value}
          type={type}
          required={required || false}
          onChange={(e: any) => onChange(e.target.value)}
        />
      </Label>       
    )
  }
}