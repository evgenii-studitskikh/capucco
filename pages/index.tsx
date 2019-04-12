import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
  border: 1px solid black;
`;

export default class extends React.Component {
  render() {    
    return (
      <Search>
        <p>Hello Next.js</p>
      </Search>
    )
  }
}