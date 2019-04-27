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
} from './styled';
import Course from './Course';
import { loadFirebase } from '../../lib/db';

interface ISearchresultProps {
  router: any,
  coursesData: any
}

class Searchresult extends React.Component<ISearchresultProps> {

  static getInitialProps = () =>

    loadFirebase().firestore().collection('courses')
      .get()
      .then((snapshot: any) => {
        
        let data: any[] = [];
        snapshot.forEach((course: any) => {
          data.push({
            id: course.id,
            ...course.data()
          });
        })
        return { coursesData: data };
      })

  render() {

    const {
      router,
      coursesData
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
          <Title>Results for id {router.query.location} location</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Description>
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