import React, { useState } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { withRouter } from 'next/router';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import {
  getActiveCourse
} from '../../store/selectors/course';
import {
  ICourse
} from '../../pages/course'

import {
  Container,
  Wrapper,
} from '../styled';
import {
  Content,
  Title,
  Form,
  Submit,
  Course,
  CourseTitle,
  CourseDescription,
} from './styled';

interface ICheckoutProps {
  activeCourse: ICourse
}

const Checkout = ({
  activeCourse
}:ICheckoutProps) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {

    let url = window.location.origin

    axios.post(`${url}/mails/successfulbooking`, {
        firstName,
        lastName,
        email,
        phone,
      })
      .then((response) => {

        if (response.status === 200 && response.data.id) {
          setIsSent(true)
        }
        else {
          setIsError(true)
          setErrorMessage('Network error, please try again later.');
        }
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsError(true)
      }
    )
  }

  return (
    <Container>
      <Head>
        <title>Capucco: Checkout your course!</title>
      </Head>
      <Header />
      <Wrapper>
        <Content>
          <Title>It's almost yours! We just need a few more details.</Title>
          {isSent &&
            <div>Successful!</div>
          }
          {isError &&
            <div>{errorMessage}</div>
          }
          {!isError && !isSent &&
            <Form>
              <Input
                label='First Name'
                required
                value={firstName}
                onChange={(value) => setFirstName(value)}
              />
              <Input
                top='20px'
                label='Last Name'
                required
                value={lastName}
                onChange={(value) => setLastName(value)}
              />
              <Input
                top='20px'
                label='Email'
                required
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <Input
                top='20px'
                label='Phone'
                value={phone}
                onChange={(value) => setPhone(value)}
              />
              <Submit onClick={handleSubmit}>
                Submit
              </Submit>
            </Form>
          }
          {activeCourse &&
            <Course>
              <CourseTitle>{activeCourse.title}</CourseTitle>
              <CourseDescription>{activeCourse.description}</CourseDescription>
            </Course>
          }
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  )
}

const mapStateToProps = (state: any) => ({
  activeCourse: getActiveCourse(state)
});

export default withRouter(connect(
  mapStateToProps, null
)(Checkout));