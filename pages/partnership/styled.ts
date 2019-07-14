import styled, { css } from 'styled-components';

interface ISubTitle {
  active: boolean
}

export const Info = styled.div`
  width: 50%;
  padding-right: 50px;
`;

export const InfoSeparator = styled.div`
  position: relative;
  margin: 20px 0;
  width: fit-content;
  padding-left: 12px;
  font-size: 12px;
  text-transform: uppercase;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 8px;
    height: 1px;
    background: #ffffff;
  }

  &::after {
    left: calc(100% + 4px);
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 36px;
`;

export const SubTitle: any = styled.h2`
  margin: 0;
  font-size: 36px;

  ${({ active }: ISubTitle) => active && css`
    color: #64c178;
    font-family: 'Noto Sans Bold', sans-serif;
    cursor: pointer;
  `}
`;

export const Headline = styled.div`
  display: flex;
  position: absolute;
  width: inherit;
  margin-top: 40px;
  color: #ffffff;
  top: 80px;
`;

export const HeadlineBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url('../static/images/background-partnership.jpg') center 0 no-repeat;
  background-size: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(6, 102, 204, 0.7) 0%, rgba(0,0,0,0.5) 50%);
  }
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const Form = styled.form`
  float: right;
  width: 400px;
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
