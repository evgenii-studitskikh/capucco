import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import {
  Container,
} from '../styled';

class Course extends React.Component {

  render() {

    return (
      <Container>
        <Head>
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <Header />
        Course page
      </Container>
    )
  }
}

export default withRouter(Course)