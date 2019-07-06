import React from 'react';
import Link from 'next/link'

import {
  Header,
  Places,
  Place,
  PlaceCourses,
  PlaceLink,
} from './styled'
import {
  Container,
  Wrapper,
} from '../../pages/styled';

interface IPlace {
  id: number,
  name: string,
  courses_count: number
}

interface IPopularPlacesProps {
  data: IPlace[]
}

export default class PopularPlaces extends React.Component<IPopularPlacesProps> {

  render() {

    const { data } = this.props;

    return (
      <Container>
        <Wrapper>
          <Header>Popular destinations for learning the new</Header>
          <Places>
            {data.map((place: IPlace, index: number) =>
              <Place key={index}>
                <Link
                  key={index}
                  href={`/searchresults?location=${place.id}`}
                >
                  <PlaceLink>{place.name}</PlaceLink>
                </Link>
                <PlaceCourses>{place.courses_count} courses</PlaceCourses>
              </Place>
            )}
          </Places>
        </Wrapper>
      </Container>
    )
  }
}