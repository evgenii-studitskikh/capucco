import React, { useState } from 'react';
import Input from '../../../components/Input';

import {
  Form,
  Submit,
} from '../styled';

export const PartnerForm = () => {

  const [valueName, setNameName] = useState('');
  const [valueEmail, setEmailName] = useState('');

  return (
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
  )
}