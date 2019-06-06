import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import axios from 'axios';

import Header from '../../components/Header';
import {
  Container,
  Wrapper
} from '../styled';
import {
  Content,
  Sidebar,
  Title,
  Description,
  Cover,
  CoverWrapper,
  Miniatures,
  Miniature
} from './styled';

interface ICourse {
  title: string,
  description: string
}

interface ICourseProps {
  courseData: ICourse,
}

class Course extends React.Component<ICourseProps> {

  static async getInitialProps ({ req, query }: any) {

    let courseData: any = {
      title: '',
      description: ''
    };
    let url = req && req.headers && req.headers.host ? 'http://'+req.headers.host : window.location.origin
  
    const courseId = req 
      ? Number(req.query.id)
      : Number(query.id)

    // get courses data by location ID
    await axios.get(`${url}/api/coursedata?id=${courseId}`)
      .then((response) => {

        courseData = {...response.data[0]};
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

    return { 
      courseData: courseData,
      namespacesRequired: ['common', 'footer']
    };
  }

  render() {

    const {
      courseData
    } = this.props

    return (
      <Container>
        <Head>
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <Header />
        <Wrapper>
          <Content>
            <Title>{courseData.title}</Title>
            <Description>{courseData.description}</Description>
            <CoverWrapper>
              <Cover src='https://firebasestorage.googleapis.com/v0/b/capucco-1555146352613.appspot.com/o/courses%2F1%2Fsurfingsport.jpg?alt=media&token=febadae9-ad7b-4f67-a06f-bf8a8f3278a4'/>
              <Miniatures>
              <Miniature src='https://firebasestorage.googleapis.com/v0/b/capucco-1555146352613.appspot.com/o/courses%2F1%2Fsurfingsport.jpg?alt=media&token=febadae9-ad7b-4f67-a06f-bf8a8f3278a4' />
                <Miniature src='https://firebasestorage.googleapis.com/v0/b/capucco-1555146352613.appspot.com/o/courses%2F1%2Fi.jpeg?alt=media&token=cc9a5374-bdbb-4e7e-9613-b4aaa1172652' />
              </Miniatures>
            </CoverWrapper>
          </Content>
          <Sidebar>
            Sidebar here with actions and other things
          </Sidebar>
        </Wrapper>
      </Container>
    )
  }
}

export default withRouter(Course)