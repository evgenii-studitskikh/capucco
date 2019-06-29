import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import {
  Container,
  Wrapper,
} from '../styled';
import {
  Content,
  Title,
  Form,
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
            <Title>It's almost yours! We just need a few more details.</Title>
            <Form>
              <Input
                label='First Name'
              />
              <Input
                label='Last Name'
              />
              <Input
                label='Email'
              />
              <Input
                label='Phone'
              />
            </Form>
          </Content>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Checkout)
