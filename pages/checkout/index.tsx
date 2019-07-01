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
  Submit,
} from './styled';

class Checkout extends React.Component {

  private handleSend = () => {
    let url = window.location.origin
    axios.post(`${url}/mails/successfulbooking`, {
        firstName: 'Fred', //change to input values
        email: 'estrueall@gmail.com' //change to input values
      })
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
              <Submit onClick={this.handleSend}>
                Submit
              </Submit>
            </Form>
          </Content>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Checkout)
