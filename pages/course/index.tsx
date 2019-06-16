import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Select from '../../components/Select';
import { Map } from '../../components/Map';
import {
  Container,
  Wrapper
} from '../styled';
import {
  Content,
  Sidebar,
  Title,
  Address,
  Description,
  Cover,
  CoverWrapper,
  Miniatures,
  Miniature,
  BookingForm,
  Field,
  BookButton,
  Price,
  MapContainer,
} from './styled';

interface IImage {
  id: number,
  url: string,
  isCover: boolean
}

interface ICourse {
  title: string,
  address: string,
  description: string,
  images: IImage[],
  price: number,
  availability: string[]
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
      price: 0,
      title: '',
      address: '',
      description: '',
      availability: [],
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
      title,
      description,
      images,
      price,
      address,
      availability,
    } = this.props.courseData

    const {
      activeImage
    } = this.state

    return (
      <Container>
        <Head>
          <title>{title} - Capucco</title>
        </Head>
        <Header />
        <Wrapper>
          <Content>
            <Title>{title}</Title>
            <Address>{address}</Address>
            <Description>{description}</Description>
            {images.length &&
              <CoverWrapper>
                <Cover src={images[activeImage].url}/>
                <Miniatures>
                  {images.map((image: IImage, index: number) =>
                    <Miniature
                      key={image.id}
                      src={image.url}
                      onMouseEnter={() => this.handleMiniatureClick(index)}
                      isActive={index === activeImage}
                    />
                  )}
                </Miniatures>
              </CoverWrapper>
            }
            key things
            reviews 
          </Content>
          <Sidebar>
            <BookingForm>
              <Price>$ {price}</Price>
              <Field>
                <Select
                  label='Date'
                  data={availability.map(date => {
                    return({
                      label: date, 
                      value: date
                    })
                  })}
                />
              </Field>
              <Field>
                <Select
                  label='Persons'
                  data={[{label: '1 Person', value: '1'}, {label: '2 Persons', value: '2'}]}
                />
              </Field>
              Total: $ {price * 2}
              <BookButton>Checkout</BookButton>
            </BookingForm>
            <MapContainer>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </MapContainer>
          </Sidebar>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(Course)