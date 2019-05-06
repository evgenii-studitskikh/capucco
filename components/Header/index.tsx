import React from 'react';
import Link from 'next/link';

import LocalePicker from './LocalePicker';
import Feedback from './Feedback';
import {
  Container,
  Logo,
  Column,
  HeaderItem,
} from './styled';

export default class Header extends React.Component {

  render() {    
    return (
      <Container>
        <Column>
          <Link
            href={`/`}
          >
            <Logo src='./static/images/logo.png'/>
          </Link>
          <Link
            href={`/about`}
          >
            <HeaderItem>About</HeaderItem>
          </Link>
          <Link
            href={`/how-it-works`}
          >
            <HeaderItem>How it works</HeaderItem>
          </Link>
          <Link
            href={`/faq`}
          >
            <HeaderItem>FAQ</HeaderItem>
          </Link>
          <Link
            href={`/partnership`}
          >
            <HeaderItem>Partnership</HeaderItem>
          </Link>
        </Column>
        <Column>
          <LocalePicker />
          <Feedback />
        </Column>
      </Container>
    )
  }
}