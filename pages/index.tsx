import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("/static/images/background-main.jpg") center no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.6;
    z-index: 1;
  }
`;

export default class extends React.Component {
  render() {    
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style>{`
          body { 
            margin: 0;
            font: 12px Arial;
          }
        `}</style>
        <Header />
        <SearchForm />
      </Container>
    )
  }
}