import React from 'react';
import Link from 'next/link';

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
          1 day 6 hours before next course!
          <Link href={`/course?id=${id}`}>
            <Book>Check Availability</Book>
          </Link>
        </Actions>
      </Container>
    )
  }
}
