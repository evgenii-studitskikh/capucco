import React from 'react';

import {
  Container,
  Field,
} from './styled';

interface ISubjectProps {
  placeholder: string
}

export default class Subject extends React.Component<ISubjectProps> {

  render() {

    const {
      placeholder
    } = this.props;

    return (
      <Container>
        <Field
          placeholder={placeholder}
        />
      </Container>
    )
  }
}