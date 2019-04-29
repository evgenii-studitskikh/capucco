import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 20px);
  min-height: 200px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
`;

export const InfoFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Title = styled.h5`
  margin: 0;
  font-size: 14px;
`;

export const Description = styled.p`
  font-size: 12px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  margin-left: 10px;
`;

export const Price = styled.span`
  margin: 10px 0;
  font-size: 18px;
`;

export const Options = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Option = styled.li`
  display: inline;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #64c178;
  border-radius: 2px;
  color: #64c178;
`;

export const Book = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 2px;
  background: #0666CC;
  font-size: 14px;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
`;