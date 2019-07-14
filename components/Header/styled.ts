import styled, { css } from 'styled-components';

interface IContainer {
  inverted: boolean
}

export const Logo = styled.img`
  border-right: 1px solid #eee;
  height: 40px;
  margin-left: 20px;
  padding-right: 20px;
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

export const Container: any = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  z-index: 2;

  ${({ inverted }: IContainer) => inverted && css`
    background: none;
    box-shadow: none;
    color: #ffffff;

    ${Logo} {
      border: none;
    }
  `};
`;
