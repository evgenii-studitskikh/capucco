import styled, { css } from 'styled-components';

interface ITitle {
  active?: boolean
}

export const Info = styled.div`
  width: 50%;
  padding-right: 50px;

  @media only screen and (max-width: 980px) {
    width: 100%;
    padding-right: 0;
    text-align: center;
  }
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

  @media only screen and (max-width: 980px) {
    width: 100%;
    text-align: center;

    &::after {
      left: calc(50% + 20px);
    }

    &::before {
      left: calc(50% - 15px);
    }
  }
`;

export const Title = styled.span`
  margin: 0;
  font-size: 36px;
  transition: all .3s ease-out;

  ${({ active }: ITitle) => active && css`
    color: #64c178;
    transition: all .3s ease-in .3s;
    cursor: pointer;
  `}
`;

export const HeadlineWrapper = styled.div`
  min-height: 100vh;
`;

export const Headline = styled.div`
  display: flex;
  position: absolute;
  width: 1132px;
  margin-top: 40px;
  color: #ffffff;
  top: 80px;

  @media only screen and (max-width: 1145px) {
    width: calc(100% - 20px);
  }

  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const HeadlineBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url('../static/images/background-partnership.jpg') center 0 no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 800px;
    background: linear-gradient(to bottom, rgba(6, 102, 204, 0.7) 0%, rgba(0,0,0,0.5) 50%);
  }
`;

export const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 980px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
