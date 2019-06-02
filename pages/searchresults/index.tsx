import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from './Filter';
import {
  Title,
  Description,
  Sorting,
} from './styled';
import {
  Container,
  Wrapper,
} from '../styled';
import Course from './Course';

interface ISearchresultProps {
  router: any,
  coursesData: any,
  locationData: any,
}

class Searchresult extends React.Component<ISearchresultProps> {

  static async getInitialProps ({ req, query }: any) {

    let coursesData: any[] = [];
    let locationData: any = {
      name: ''
    };
    let url = req && req.headers && req.headers.host ? 'http://'+req.headers.host : window.location.origin

    const locationId = req 
      ? Number(req.query.location)
      : Number(query.location)

    // get courses data by location ID
    
    // get location data by its ID
    await axios.get(`${url}/api/locationdata?id=${locationId}`)
      .then((response) => {

        locationData = response.data[0]
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    
    return { 
      coursesData: coursesData,
      locationData: locationData,
      namespacesRequired: ['common', 'search-form', 'footer']
    };
  }

  render() {

    const {
      coursesData,
      locationData,
    } = this.props

    return (
      <Container>
        <Head>
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <style>{`
          body { 
            margin: 0;
            font: 12px Arial;
          }
        `}</style>
        <Header />
        <Filter />
        <Wrapper>
          <Title>Courses in {locationData.name}</Title>

          {locationData.description &&
            <Description>{locationData.description}</Description>
          }

          {coursesData && coursesData.length > 0 &&
            <Sorting>
              Sort by
            </Sorting>
          }

          {coursesData && coursesData.length > 0 && coursesData.map((data: any, index: number) =>
            <Course 
              key={index}
              data={data}
            />
          )}
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Searchresult)