import React from 'react';
import Link from 'next/link';

import LocalePicker from './LocalePicker';
import Feedback from './Feedback';
import {
  Container,
  Logo,
  RightBar,
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
        <RightBar>
          <LocalePicker />
          <Feedback />
        </RightBar>
      </Container>
    )
  }
}