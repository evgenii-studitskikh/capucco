import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import axios from 'axios'

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

interface IProps {
  popularPlacesData: any[],
  featuredCoursesData: any[],
  namespacesRequired: string[]
}

export default class extends React.Component<IProps> {

  static async getInitialProps({ req, query }: any) {

    let popularPlacesData: any[] = []
    let featuredCoursesData: any[] = []
    const url = req && req.headers && req.headers.host ? 'http://'+req.headers.host : window.location.origin

    // get popular locations data
    await axios.get(`${url}/api/popularlocations`)
      .then((response) => {

        popularPlacesData = response.data
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

    // get featured courses data
    await axios.get(`${url}/api/featuredcourses`)
      .then((response) => {

        featuredCoursesData = response.data
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    
    return {
      featuredCoursesData: featuredCoursesData,
      popularPlacesData: popularPlacesData,
      namespacesRequired: ['common', 'search-form', 'footer']
    }
  }

  render() {    

    const {
      popularPlacesData,
      featuredCoursesData
    } = this.props

    return (
      <Container>
        <Head>
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <Header />
        <SearchContainer>
          <SearchForm />
        </SearchContainer>
        <FeaturedCourses data={featuredCoursesData}/>
        <PopularPlaces data={popularPlacesData}/>
        <Footer />
      </Container>
    )
  }
}