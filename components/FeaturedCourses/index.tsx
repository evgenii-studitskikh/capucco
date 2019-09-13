import React from 'react';
import Link from 'next/link'

import {
  Header,
  Cards,
  Card,
  CardTitle,
  CardDescription,
} from './styled'
import {
  Container,
  Wrapper,
} from '../../pages/styled';

interface ICourse {
  title: string,
  description: string,
  location: number,
  subject: number,
  background: string,
}

interface IFeaturedCoursesProps {
  data: ICourse[]
}

export default class FeaturedCourses extends React.Component<IFeaturedCoursesProps> {

  render() {

    const { data } = this.props;

    return (
      <Container>
        <Wrapper>
          <Header>Discover the most effective experiences</Header>
          <Cards>
            {data.map((card: any, index: number) =>
              <Link
                key={index}
                href={`/getCourses?location=${card.location}&subject=${card.subject}`}
                as={`/searchresults?location=${card.location}&subject=${card.subject}`}
              >
                <Card
                  backgroundPic={card.image}
                >
                  <CardTitle>{card.name}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </Card>
              </Link>
            )}
          </Cards>
        </Wrapper>
      </Container>
    )
  }
}