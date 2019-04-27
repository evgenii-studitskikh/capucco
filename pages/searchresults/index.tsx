import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

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
  courses: any[]
}

class Searchresult extends React.Component<ISearchresultProps> {

  public state = {
    coursesData: [
      {
        id: 11,
        title: 'Surfing school at Kamala Beach',
        description: 'It was my first surfing lesson with Rick! I gotta say, he is the best and obviously a professional surfer! If you are looking for a surf lesson, here is the answer you are looking for. Does not matter which levels you are, he would definitely give you the best experience!!',
        image: 'https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 1250,
        options: ['Free cancelation avalible', 'Not far from the beach']
      },
      {
        id: 12,
        title: 'Stanford Python Intro Course',
        description: 'Learn basic syntax, programming, and packages for data manipulation and exploration. Accessible to beginners new to the language, enabling further study of advanced topics. Grad Certificate Programs. Flexible Courses. Request Information Today. Access Free Content.',
        image: 'https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80',
        price: 550,
        options: ['Free cancelation avalible', 'Best price']
      }
    ]
  }

  static getInitialProps = () =>

    loadFirebase().firestore().collection('locations')
      .get()
      .then((snapshot: any) => {
        
        let data: any[] = [];
        snapshot.forEach((location: any) => {
          data.push({
            id: location.id,
            ...location.data()
          });
        })
        return { locations: data };
      })

  render() {

    const {
      router
    } = this.props

    const {
      coursesData
    } = this.state;

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