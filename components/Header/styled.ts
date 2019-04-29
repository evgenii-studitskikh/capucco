import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 180px);
  height: 50px;
  padding: 10px 30px 10px 150px;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
`;

export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 150px;
  background: url("/static/images/logo.svg") no-repeat;
  background-size: 100%;
  border-right: 1px solid #eee;
  cursor: pointer;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
`;

export const HeaderItem = styled.span`
  margin-left: 30px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
