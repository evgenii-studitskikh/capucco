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
  HeadlineWrapper,
  Headline,
  HeadlineBackground,
  FormContainer,
  Info,
  InfoSeparator,
} from './styled';

interface IPartnershipState {
  isLoginFormActive: boolean,
  isRegistrationFormActive: boolean
}

class Partnership extends React.Component<any, IPartnershipState> {

  public state = {
    isLoginFormActive: false,
    isRegistrationFormActive: true
  }

  private handleLoginButtonClick = () => {
    this.setState({
      isLoginFormActive: true,
      isRegistrationFormActive: false
    })
  }

  public handleRegistrationButtonClick = () => {
    this.setState({
      isLoginFormActive: false,
      isRegistrationFormActive: true
    })
  }

  public render() {

    const {
      isLoginFormActive,
      isRegistrationFormActive
    } = this.state;

    return (
      <Container>
        <Head>
          <title>Create your own course on Capucco</title>
        </Head>
        <Header inverted/>
        <Wrapper>
          <HeadlineWrapper>
            <HeadlineBackground />
            <Headline>
              <Info>
                <Title 
                  active={isLoginFormActive}
                  onClick={this.handleRegistrationButtonClick}
                >
                  Create
                </Title>
                <Title> your own course on Capucco and get more students!</Title>
                <InfoSeparator>or</InfoSeparator>
                <Title 
                  active={isRegistrationFormActive}
                  onClick={this.handleLoginButtonClick}
                >
                  Log in
                </Title>
                <Title> if you already did it</Title>
              </Info>
              <FormContainer>
                <PartnerForm
                  isLoginFormActive={isLoginFormActive}
                  isRegistrationFormActive={isRegistrationFormActive}
                />
              </FormContainer>
            </Headline>
          </HeadlineWrapper>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Partnership)