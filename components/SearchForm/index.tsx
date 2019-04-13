import React from 'react';

import {
  Container
} from './styled'
import Location from './Location';

export default class extends React.Component {
  render() {    
    return (
      <Container>
        <Location />
      </Container>
    )
  }
}