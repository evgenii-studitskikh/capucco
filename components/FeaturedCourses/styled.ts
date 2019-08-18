import styled from 'styled-components';

export const Header = styled.h2`
  font-size: 18px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
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
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  @media only screen and (max-width: 980px) {
    width: calc(100% - 30px);
  }

  &:hover {
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.5);
    transform: scale(1.01);

    @media only screen and (max-width: 980px) {
      transform: none;
    }
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

  &:last-child {
    margin-right: 0;
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