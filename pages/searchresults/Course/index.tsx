import React from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';
import moment from 'moment';

import {
  Container,
  ImageContainer,
  Image,
  Info,
  InfoFields,
  Title,
  Address,
  Description,
  Options,
  Option,
  Actions,
  Price,
  Book,
  Like,
  Availability,
} from './styled';

interface ICourseProps {
  data: any
}

export default class Course extends React.Component<ICourseProps> {

  render() {

    const {
      id,
      image,
      title,
      description,
      price,
      options,
      address,
      availability,
    } = this.props.data;

    return (
      <Container>
        <Info>
          <Link href={`/course?id=${id}`}>
            <ImageContainer>
              <Image src={image} />
            </ImageContainer>
          </Link>
          <InfoFields>
            <Link href={`/course?id=${id}`}>
              <Title>{title}</Title>
            </Link>
            <Address>{address}</Address>
            <Description>{description}</Description>
            <Options>
              {options && options.length > 0 && options.map((option: string, index: number) =>
                <Option key={index}>{option}</Option>
              )}
            </Options>
          </InfoFields>
        </Info>
        <Actions>
          <Price>$ {price}</Price>
          {availability && availability.length &&
            <Availability>
              {`Next course will start ${moment(availability[0], 'DD/MM/YYYY').fromNow()}`}
            </Availability>
          }
          <Link href={`/course?id=${id}`}>
            <Book>Check Availability</Book>
          </Link>
          <Like>
            145 Users liked it
            <ReactSVG
              className='SVG-like'
              src={'./static/images/like.svg'}
            />
          </Like>
        </Actions>
      </Container>
    )
  }
}
