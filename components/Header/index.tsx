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

interface IHeaderProps {
  inverted?: boolean
}

export default class Header extends React.Component<IHeaderProps> {

  render() {

    const {
      inverted
    }: IHeaderProps = this.props;

    return (
      <Container inverted={inverted}>
        <Column>
          <Link
            href={`/`}
          >
            <Logo src={inverted
                ? './static/images/logo-white.png'
                : './static/images/logo.png'
              }
            />
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