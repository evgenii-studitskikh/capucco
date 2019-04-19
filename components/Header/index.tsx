import React from 'react';
import Link from 'next/link';

import LocalePicker from './LocalePicker';
import {
  Container,
  Logo,
} from './styled';

export default class Header extends React.Component {
  render() {    
    return (
      <Container>
        <Link
          href={`/`}
        >
          <Logo />
        </Link>
        <LocalePicker />
      </Container>
    )
  }
}