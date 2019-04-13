import React from 'react';

import {
  Container,
  ApplyButton,
} from './styled'
import Location from './Location';

export default class extends React.Component {
  render() {    
    return (
      <Container>
        <Location />
        <ApplyButton>
          Search
        </ApplyButton>
      </Container>
    )
  }
}