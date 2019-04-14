import React from 'react';
import Link from 'next/link'

import {
  Container,
  Header,
  Form,
  ApplyButton,
} from './styled'
import Location from './Location';
import Subject from './Subject';
import {
  ILocation
} from './types';

interface ISearchFormState {
  location: ILocation
}

export default class SearchForm extends React.Component<any, ISearchFormState> {

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
        <Header>Learn anything and anywhere</Header>
        <Form>
          <Location
            locationValue={location}
            onLocationChange={this.handleLocationChange}
          />
          <Subject />
          <Link href={`/searchresults?location=${location.id}`}>
            <ApplyButton>
              Search
            </ApplyButton>
          </Link>
        </Form>
      </Container>
    )
  }
}