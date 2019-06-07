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

interface IImage {
  id: number,
  url: string,
  isCover: boolean
}

interface ICourse {
  title: string,
  description: string,
  images: IImage[]
}

interface ICourseProps {
  courseData: ICourse,
}

interface ICourseState {
  activeImage: number
}

class Course extends React.Component<ICourseProps, ICourseState> {

  state = {
    activeImage: 0
  }

  static async getInitialProps ({ req, query }: any) {

    let courseData: ICourse = {
      title: '',
      description: '',
      images: []
    };
    let url = req && req.headers && req.headers.host ? 'http://'+req.headers.host : window.location.origin
  
    const courseId = req 
      ? Number(req.query.id)
      : Number(query.id)

    // get courses data by course ID
    await axios.get(`${url}/api/coursedata?id=${courseId}`)
      .then((response) => {

        courseData = {...response.data[0]};
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

    // get courses images by course ID
    await axios.get(`${url}/api/courseimages?id=${courseId}`)
      .then((response) => {

        courseData.images = response.data;
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

  private handleMiniatureClick(index: number) {
    this.setState({
      activeImage: index
    });
  }

  render() {

    const {
      courseData
    } = this.props

    const {
      activeImage
    } = this.state

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
            {courseData.images.length &&
              <CoverWrapper>
                <Cover src={courseData.images[activeImage].url}/>
                <Miniatures>
                  {courseData.images.map((image: IImage, index: number) =>
                    <Miniature
                      key={image.id}
                      src={image.url}
                      onClick={() => this.handleMiniatureClick(index)}
                      isActive={index === activeImage}
                    />
                  )}
                </Miniatures>
              </CoverWrapper>
            }
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