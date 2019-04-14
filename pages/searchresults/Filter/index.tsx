import React from 'react';

import {
  Container,
  Wrapper,
  FilterButton,
} from './styled';

export default class Searchresult extends React.Component {

  render() {

    return (
      <Container>
        <Wrapper>
          Filter by:
          <FilterButton>Price</FilterButton>
          <FilterButton>Type</FilterButton>
          <FilterButton>Rating</FilterButton>
        </Wrapper>
      </Container>
    )
  }
}
