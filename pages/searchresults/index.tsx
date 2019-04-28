import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import Filter from './Filter';
import {
  Container,
  Wrapper,
  Title,
  Description,
  Sorting,
} from './styled';
import Course from './Course';
import { loadFirebase } from '../../lib/db';

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

    const locationId = req 
      ? Number(req.query.location)
      : Number(query.location)

    // get courses data by location ID
    await loadFirebase()
    .firestore()
    .collection('courses')
    .where('location', '==', locationId)
    .get()
    .then((snapshot: any) => {
      
      snapshot.forEach((course: any) => {
        coursesData.push({
          id: course.id,
          ...course.data()
        });
      })
    })
    .catch((err) => {
      console.error('Error getting courses', err);
    })

    // get location data by its ID
    await loadFirebase()
    .firestore()
    .collection('locations')
    .where('id', '==', locationId)
    .get()
    .then((snapshot: any) => {
      
      snapshot.forEach((location: any) => {
        locationData = location.data();
      })
    })
    .catch((err) => {
      console.error('Error getting location', err);
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
      </Container>
    )
  }
}

export default withRouter(Searchresult)