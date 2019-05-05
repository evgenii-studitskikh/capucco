import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import FeaturedCourses from '../components/FeaturedCourses';
import PopularPlaces from '../components/PopularPlaces';

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

  static getInitialProps() {

    return {
      namespacesRequired: ['common', 'search-form', 'footer']
    }
  }

  render() {    
    return (
      <Container>
        <Head>
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <Header />
        <SearchContainer>
          <SearchForm />
        </SearchContainer>
        <FeaturedCourses />
        <PopularPlaces />
        <Footer />
      </Container>
    )
  }
}