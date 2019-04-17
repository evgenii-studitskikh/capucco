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

interface ISearchresultProps {
  router: any,
  courses: any[]
}

class Searchresult extends React.Component<ISearchresultProps> {

  // uncomment this block when API will be ready

  // static getInitialProps = async(context: any) => {


  //   const res = await fetch(`https://api.tvmaze.com/search/shows?q=${context.query.location}`);
  //   const data = await res.json();

  //   return {
  //     courses: data.map((entry: any) => entry.show)
  //   }
  // }

  render() {

    const {
      router
    } = this.props

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
        <Filter />
        <Wrapper>
          <Title>Results for id {router.query.location} location</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Description>
          <Course />
        </Wrapper>
      </Container>
    )
  }
}

export default withRouter(Searchresult)