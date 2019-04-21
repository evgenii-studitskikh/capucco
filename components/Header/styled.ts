import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 30px);
  height: 50px;
  padding: 10px 30px 10px 0;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 150px;
  background: url("/static/images/logo.svg") no-repeat;
  background-size: 100%;
  border-right: 1px solid #eee;
  cursor: pointer;
`;

export const RightBar = styled.div`
  display: flex;
  align-items: center;
`;