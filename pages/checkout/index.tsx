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

class Checkout extends React.Component{

  public state = {
    valueFirstName: '',
    valueLastName: '',
    valueEmail: '',
    valuePhone: '',
    isSuccessfulSent: false,
  }

  private handleSend = () => {

    const {
      valueFirstName,
      valueLastName,
      valueEmail,
      valuePhone,
    } = this.state;

    let url = window.location.origin

    axios.post(`${url}/mails/successfulbooking`, {
        firstName: valueFirstName,
        lastName: valueLastName,
        email: valueEmail,
        phone: valuePhone,
      })
      .then((response) => {

        if (response.status === 200 && response.data.id) {
          this.setState({
            isSuccessfulSent: true
          })
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

  private handleInputChange = (field: string, value: string) => {
    this.setState({
      [field]: value
    });
  }

  render() {

    const {
      valueFirstName,
      valueLastName,
      valueEmail,
      valuePhone,
      isSuccessfulSent,
    } = this.state;

    return (
      <Container>
        <Head>
          <title>Capucco: Checkout your course!</title>
        </Head>
        <Header />
        <Wrapper>
          <Content>
            <Title>It's almost yours! We just need a few more details.</Title>
            {isSuccessfulSent ?
              <div>Successful!</div>
            :
              <Form>
                <Input
                  label='First Name'
                  required
                  value={valueFirstName}
                  onChange={(value) => this.handleInputChange('valueFirstName', value)}
                />
                <Input
                  top='20px'
                  label='Last Name'
                  required
                  value={valueLastName}
                  onChange={(value) => this.handleInputChange('valueLastName', value)}
                />
                <Input
                  top='20px'
                  label='Email'
                  required
                  value={valueEmail}
                  onChange={(value) => this.handleInputChange('valueEmail', value)}
                />
                <Input
                  top='20px'
                  label='Phone'
                  value={valuePhone}
                  onChange={(value) => this.handleInputChange('valuePhone', value)}
                />
                <Submit onClick={this.handleSend}>
                  Submit
                </Submit>
              </Form>
            }
          </Content>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Checkout)
