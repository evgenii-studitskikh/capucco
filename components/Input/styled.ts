import styled from 'styled-components';

export const Label: any = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ top }: any) => top || 0};
`;

export const Field: any = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  border: none;
  background-color: #f9f9f9;
  font-size: 14px;
  outline: none;
`;
