import React from 'react';
import Link from 'next/link';

import {
  Container,
  Logo,
} from './styled'

export default class extends React.Component {
  render() {    
    return (
      <Container>
        <Link
          href={`/`}
        >
          <Logo />
        </Link>
      </Container>
    )
  }
}