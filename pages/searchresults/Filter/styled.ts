import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #B1DBFF;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1132px;
  font-size: 14px;
  color: #434656;
`;

export const FilterButton = styled.button`
  position: relative;
  width: 100px;
  height: 30px;
  margin-left: 15px;
  padding-right: 10px;
  background: #001666;
  border: none;
  border-radius: 20px;
  color: #FFFFFF;
  outline: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 13px;
    right: 15px;
    height: 8px;
    border-top: solid 4px #FFFFFF;
    border-left: solid 4px transparent;
    border-right: solid 4px transparent;
  }
`;