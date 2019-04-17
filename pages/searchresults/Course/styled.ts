import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.06);
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 2px;
  object-fit: cover;
`;

export const Info = styled.div`
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
  width: 30%;
  margin-left: 10px;
`;

export const Price = styled.span`
  font-size: 14px;
`;

export const Options = styled.ul`
`;

export const Option = styled.li`
`;

export const Book = styled.button``;