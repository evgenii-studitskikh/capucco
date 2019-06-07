import styled from 'styled-components';

export const Content = styled.main`
  float: left;
  width: 60%;
  margin-top: 20px;
`;

export const Sidebar = styled.aside`
  float: left;
  width: calc(40% - 20px);
  margin-left: 20px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const CoverWrapper = styled.div`
  width: 100%;
`;

export const Cover = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Miniatures = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: -3px;
`;

export const Miniature: any = styled.img`
  position: relative;
  width: 150px;
  height: 100px;
  margin-right: 10px;
  border: ${({ isActive }: any) => `3px solid ${isActive ? '#0666CC' : 'transparent'}`};
  object-fit: cover;
  cursor: pointer;
`;