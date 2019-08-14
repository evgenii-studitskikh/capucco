import styled from 'styled-components';

export const Content = styled.main`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 60px 15px;
  margin-top: 40px;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
`;

export const Title = styled.h1`
  position: absolute;
  top: 0;
  font-size: 24px;
`;

export const Form = styled.div`
  width: 200px;
`;

export const Submit = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 2px;
  background: #0666CC;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
`;

export const Course = styled.section`
  width: 50%;
`;

export const CourseTitle = styled.h2``;

export const CourseDescription = styled.p``;
