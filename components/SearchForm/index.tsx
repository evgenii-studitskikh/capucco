import React from 'react';
import Link from 'next/link'

import {
  Container,
  ApplyButton,
} from './styled'
import Location from './Location';
import {
  ILocation
} from './types';

interface ISearchFormState {
  location: ILocation
}

export default class SearchForm extends React.Component<null, ISearchFormState> {

  public state = {
    location: {
      id: 0,
      name: ''
    }
  }

  public handleLocationChange = (location: ILocation) => {

    this.setState({ location })
  }

  render() {

    const {
      location
    } = this.state;
    
    return (
      <Container>
        <Location
          locationValue={location}
          onLocationChange={this.handleLocationChange}
        />
        <Link href={`/searchresults?location=${location.id}`}>
          <ApplyButton>
            Search
          </ApplyButton>
        </Link>
      </Container>
    )
  }
}