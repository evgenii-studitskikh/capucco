import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Container,
  Wrapper
} from '../styled';
import {
  Content
} from './styled';

class Checkout extends React.Component {

  render() {

    return (
      <Container>
        <Head>
          <title>Capucco: Checkout your course!</title>
        </Head>
        <Header />
        <Wrapper>
          <Content>
            Details form
          </Content>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Checkout)
