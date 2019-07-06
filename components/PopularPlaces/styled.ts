import styled from 'styled-components';

export const Header = styled.h2`
  font-size: 18px;
`;

export const Places = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Place = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 5px 0;
  font-size: 14px;
`;


export const PlaceLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const PlaceCourses = styled.span`
  color: #434656;
`;
