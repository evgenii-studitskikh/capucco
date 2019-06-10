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
  isLocationDataEmpty: boolean,
}

class Searchresult extends React.Component<ISearchresultProps> {

  static async getInitialProps ({ req, query }: any) {

    let coursesData: any[] = [];
    let locationData: any = {};
    let isLocationDataEmpty: boolean = true;
    let url = req && req.headers && req.headers.host ? 'http://'+req.headers.host : window.location.origin

    const locationId = req 
      ? Number(req.query.location)
      : Number(query.location)

    // get courses data by location ID
    await axios.get(`${url}/api/coursesdata?location=${locationId}`)
      .then((response) => {

        coursesData = response.data
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    
    // get location data by its ID
    await axios.get(`${url}/api/locationdata?id=${locationId}`)
      .then((response) => {

        if (response.data[0]) {
          locationData.name = response.data[0].name
          locationData.description = response.data[0].description
          isLocationDataEmpty = false;
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    
    return { 
      coursesData: coursesData,
      locationData: locationData,
      isLocationDataEmpty: isLocationDataEmpty || false,
      namespacesRequired: ['common', 'search-form', 'footer']
    };
  }

  render() {

    const {
      coursesData,
      locationData,
      isLocationDataEmpty,
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
          {isLocationDataEmpty
            ? <Title>Courses not found!</Title>
            :
              <React.Fragment>
                <Title>Courses in {locationData.name}</Title>

                {locationData.description &&
                  <Description>{locationData.description}</Description>
                }

                <Sorting>
                  Sort by -next date   -price  -rathing
                </Sorting>

                {coursesData.map((data: any, index: number) =>
                  <Course 
                    key={index}
                    data={data}
                  />
                )}
              </React.Fragment>
          }
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Searchresult)