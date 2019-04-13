import React from 'react';
import styled from 'styled-components';

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
        Results
      </Container>
    )
  }
}