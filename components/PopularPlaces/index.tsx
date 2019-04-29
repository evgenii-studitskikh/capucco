import React from 'react';
import Link from 'next/link'

import {
  Container,
  Wrapper,
  Header,
  Places,
  Place,
  PlaceCourses,
} from './styled'

export default class PopularPlaces extends React.Component {

  public state = {
    data: [
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      },
      {
        id: 1,
        name: "New York"
      }
    ]
  }
  
  render() {

    const { data } = this.state;

    return (
      <Container>
        <Wrapper>
          <Header>Popular destinations for learning the new</Header>
          <Places>
            {data.map((place: any, index: number) =>
              <Link
                key={index}
                href={`/getCourses?location=${place.id}`}
              >
                <Place>
                  {place.name}
                  <PlaceCourses>321 courses</PlaceCourses>
                </Place>
              </Link>
            )}
          </Places>
        </Wrapper>
      </Container>
    )
  }
}