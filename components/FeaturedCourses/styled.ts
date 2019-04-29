import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 10px 0 10px;
  background: #FFFFFF;
`;

export const Wrapper = styled.div`
  width: 1132px;
`;

export const Header = styled.h2`
  font-size: 18px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 180px;
  height: 250px;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  background: ${({ backgroundPic }: any) => `url(${backgroundPic}) center no-repeat`};
  background-size: cover;
  color: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.5);
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transition: all 0.5s;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);
    transform: scale(1.01);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 1;
  }
`;

export const CardTitle = styled.span`
  font-size: 18px;
  z-index: 2;
`;

export const CardDescription = styled.span`
  font-size: 14px;
  z-index: 2;
`;