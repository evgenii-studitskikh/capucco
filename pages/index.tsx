import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { withNamespaces } from '../i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import PopularCourses from '../components/PopularCourses';
import { loadFirebase } from '../lib/db';

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

  static async getInitialProps() {

    let firebase = await loadFirebase();  
    let result = await new Promise((resolve, reject) => {
      firebase.firestore().collection('locations')
        .get()
        .then((snapshot: any) => {
          resolve(snapshot)
        })
        .catch((error: any) => {
          reject([])
        })
    })

    console.log(result);

    return {
      namespacesRequired: ['common', 'search-form', 'footer']
    }
  }

  render() {    
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Capucco: Learn anything and anywhere</title>
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
        <Footer />
      </Container>
    )
  }
}