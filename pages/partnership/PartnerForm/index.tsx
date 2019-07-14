import React, { useState } from 'react';
import Input from '../../../components/Input';

import {
  Container,
  Form,
  Submit,
} from './styled';

interface IPartnerFormProps {
  isLoginFormActive: boolean,
  isRegistrationFormActive: boolean
}

export const PartnerForm = ({
  isLoginFormActive,
  isRegistrationFormActive
}: IPartnerFormProps) => {

  const [valueName, setNameName] = useState('');
  const [valueEmail, setEmailName] = useState('');

  return (
    <React.Fragment>
      <Container
        active={isRegistrationFormActive}
      >
        <Form>
          <Input
            label='Your name'
            value={valueName}
            onChange={(value: string) => setNameName(value)}
          />
          <Input
            top='20px'
            label='Your email'
            value={valueEmail}
            onChange={(value: string) => setEmailName(value)}
          />
          <Submit>Join</Submit>
        </Form>
      </Container>
      <Container
        active={isLoginFormActive}
      >
        <Form>
          <Input
            label='Email'
            value={valueName}
            onChange={(value: string) => setNameName(value)}
          />
          <Input
            top='20px'
            label='Password'
            type='password'
            value={valueEmail}
            onChange={(value: string) => setEmailName(value)}
          />
          <Submit>Log in</Submit>
        </Form>
      </Container>
    </React.Fragment>
  )
}