import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import PopularCourses from '../components/PopularCourses';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: url("/static/images/background-main.jpg") center no-repeat;
  background-size: cover;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
        <SearchContainer>
          <SearchForm />
        </SearchContainer>
        <PopularCourses />
      </Container>
    )
  }
}