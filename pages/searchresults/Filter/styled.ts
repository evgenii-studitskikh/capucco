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

  @media only screen and (max-width: 1145px) {
    width: calc(100% - 20px);
  }
`;

export const FilterItem = styled.div`
  position: relative;
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

export const FilterDropdown = styled.div`
  position: absolute;
  top: 35px;
  left: 15px;
  padding: 5px;
  background: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
`;