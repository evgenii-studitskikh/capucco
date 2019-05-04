import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Container,
  Wrapper,
} from '../styled';

class Partnership extends React.Component {

  render() {

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <style>{`
          body { 
            margin: 0;
            font: 12px Arial;
          }
        `}</style>
        <Header />
        <Wrapper>
          Partnership
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Partnership)