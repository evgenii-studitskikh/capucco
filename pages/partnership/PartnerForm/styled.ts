import styled, { css } from 'styled-components';

interface IContainer {
  active: boolean
}

export const Container: any = styled.div`
  position: absolute;
  right: 0;
  width: 400px;
  transform: translateX(50px);
  opacity: 0;
  transition: transform .3s ease-out, opacity .3s ease-out;

  ${({ active }: IContainer) => active && css`
    transform: translateX(0);
    opacity: 1;
    transition: transform .3s ease-in .3s, opacity .3s ease-out .3s;
  `}

  @media only screen and (max-width: 980px) {
    right: calc(50vw - 210px);
    margin-top: 50px;
    transform: translateY(50px);

    ${({ active }: IContainer) => active && css`
    transform: translateY(0);
    `}
  }
`;

export const Form = styled.form`
  padding: 20px;
  background: rgba(145,145,145,0.2);
  border-radius: 2px;
`;

export const Submit = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 20px;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #0666CC;
  color: #FFFFFF;
  outline: none;
  cursor: pointer;
`;