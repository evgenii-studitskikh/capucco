import React from 'react';
import Link from 'next/link';

import {
  Container,
  Image,
  Info,
  Title,
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

  public state = {
    id: 11,
    title: 'Surfing school at Kamala Beach',
    description: 'It was my first surfing lesson with Rick! I gotta say, he is the best and obviously a professional surfer! If you are looking for a surf lesson, here is the answer you are looking for. Does not matter which levels you are, he would definitely give you the best experience!!',
    image: 'https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    price: 1250,
    options: ['Free cancelation avalible', 'Not far from the beach']
  }

  render() {

    const {
      id,
      image,
      title,
      description,
      price,
      options
    } = this.props.data;

    return (
      <Container>
        <Image src={image} width='200'/>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Options></Options>
          {options && options.length > 0 && options.map((option: string) =>
            <Option>{option}</Option>
          )}
          <Options>
          </Options>
        </Info>
        <Actions>
          <Price>$ {price}</Price>
          <Link
            href={`/course?location=${id}`}
          >
            <Book>Book</Book>
          </Link>
        </Actions>
      </Container>
    )
  }
}
