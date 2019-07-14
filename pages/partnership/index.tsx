import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PartnerForm } from './PartnerForm';
import {
  Container,
  Wrapper,
} from '../styled';
import {
  Title,
  SubTitle,
  Headline,
  HeadlineBackground,
  FormContainer,
  Info,
  InfoSeparator,
} from './styled';

class Partnership extends React.Component {

  render() {

    return (
      <Container>
        <Head>
          <title>Create your own course on Capucco</title>
        </Head>
        <Header inverted/>
        <Wrapper>
          <HeadlineBackground />
          <Headline>
            <Info>
              <Title>Create your own course on Capucco and get more students!</Title>
              <InfoSeparator>or</InfoSeparator>
              <SubTitle active>Log in</SubTitle>
              <SubTitle>if you already did it</SubTitle>
            </Info>
            <FormContainer>
              <PartnerForm />
            </FormContainer>
          </Headline>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Partnership)