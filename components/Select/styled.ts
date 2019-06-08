import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #FFFFFF;
  user-select: none;
`;

export const Field: any = styled.div`
  position: relative;
  padding: 10px;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
  cursor: pointer;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 13px;
    right: 20px;
    border: solid black;
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${({ isOpen }: any) => `rotate( ${isOpen ? '-135deg' : '45deg'})`};
    transition: transform .1s ease-in-out;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
  background: #ffffff;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    width: 100%;
    height: 5px;
    background: #ffffff;
  }
`;

export const Item = styled.li`
  padding: 10px;
  list-style: none;
  cursor: pointer;
`;
