import React from 'react';
import styled from 'styled-components';

import SearchForm from '../components/SearchForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default class extends React.Component {
  render() {    
    return (
      <Container>
        <SearchForm />
      </Container>
    )
  }
}