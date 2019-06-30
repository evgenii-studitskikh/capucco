import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import axios from 'axios';

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

  private handleSend = () => {
    let url = window.location.origin
    axios.get(`${url}/mails/successfulbooking`)
      .then((response) => {

        console.log(response)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

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
              <div onClick={this.handleSend}>
                Send
              </div>
            </Form>
          </Content>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Checkout)
