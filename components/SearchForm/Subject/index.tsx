import React from 'react';

import {
  Container,
  Field,
} from './styled';

export default class Subject extends React.Component {

  render() {

    return (
      <Container>
        <Field
          placeholder='Any subject'
        />
      </Container>
    )
  }
}