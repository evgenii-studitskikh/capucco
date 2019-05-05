import React from 'react';
import Link from 'next/link'

import {
  Container,
  Wrapper,
  Header,
  Places,
  Place,
  PlaceCourses,
  PlaceLink,
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
              <Place key={index}>
                <Link
                  key={index}
                  href={`/getCourses?location=${place.id}`}
                >
                  <PlaceLink>{place.name}</PlaceLink>
                </Link>
                <PlaceCourses>321 courses</PlaceCourses>
              </Place>
            )}
          </Places>
        </Wrapper>
      </Container>
    )
  }
}