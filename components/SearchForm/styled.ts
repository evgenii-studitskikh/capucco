import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
`;

export const Header = styled.h1`
  margin: 10px 0 10px 3px;
  font-size: 36px;
  color: #FFFFFF;
`;

export const Form = styled.div`
  display: flex;
  padding: 5px;
  background: rgba(145, 145, 145, 0.2);
  border-radius: 2px;
`;

export const ApplyButton = styled.button`
  width: 150px;
  margin-left: 6px;
  font-size: 16px;
  text-transform: uppercase;
  background: #0666CC;
  color: #FFFFFF;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;


export const Field = styled.input`
  position: relative;
  width: 300px;
  height: 50px;
  padding-left: 35px;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  background: url("/static/icons/place.svg") #FFFFFF 5px center no-repeat;
  background-size: 25px;
  outline: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 57px;
  left: 0;
  width: 380px;
  background: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.15);
`;

export const Place = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(0,0,0,0.15);
  }
`;
