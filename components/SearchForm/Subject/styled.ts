import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Field = styled.input`
  position: relative;
  width: 250px;
  height: 50px;
  padding-left: 15px;
  margin-left: 5px;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  outline: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 62px;
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