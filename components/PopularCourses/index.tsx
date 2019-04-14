import React from 'react';
import Link from 'next/link'

import {
  Container,
  Wrapper,
  Header,
  Cards,
  Card,
  CardTitle,
  CardDescription,
} from './styled'

interface ICourse {
  title: string,
  description: string,
  location: number,
  subject: number,
  background: string,
}

interface IPopularCoursesState {
  data: ICourse[]
}

export default class PopularCourses extends React.Component<any, IPopularCoursesState> {

  public state = {
    data: [
      {
        title: 'Climbing on Everest',
        description: 'Blab lasld lasdl asld asl d',
        location: 10,
        subject: 44,
        background: 'https://images.unsplash.com/photo-1524281423221-234569bc0438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'Python courses in Berlin',
        description: 'Blab lasld lasdl asld asl d',
        location: 10,
        subject: 44,
        background: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        title: 'Kayaking in Phuket',
        description: 'Blab lasld lasdl asld asl d',
        location: 10,
        subject: 44,
        background: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      },
      {
        title: 'Pizza cooking in Roma',
        description: 'Blab lasld lasdl asld asl d',
        location: 10,
        subject: 44,
        background: 'https://images.unsplash.com/photo-1512746804203-e53e69406f93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      },
      {
        title: 'Python courses',
        description: 'Blab lasld lasdl asld asl d',
        location: 10,
        subject: 44,
        background: 'https://images.unsplash.com/photo-1513883583436-c8bbfbc3b215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
      },
    ]
  }
  
  render() {

    const { data } = this.state;

    return (
      <Container>
        <Wrapper>
          <Header>Discover the most popular experiences</Header>
          <Cards>
            {data.map((card: ICourse, index: number) =>
              <Link href={`/searchresults?location=${card.location}&subject=${card.subject}`}>
                <Card
                  key={index}
                  backgroundPic={card.background}
                >
                  <CardTitle>{card.title}</CardTitle>
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