import styled from 'styled-components';

export const Content = styled.main`
  float: left;
  width: calc(70% - 30px);
  padding: 15px;
  margin-top: 40px;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
`;

export const Sidebar = styled.aside`
  float: left;
  width: calc(30% - 20px);
  margin-left: 20px;
  margin-top: 40px;
`;

export const Title = styled.h1`
  margin: 0;
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
`;

export const Miniature: any = styled.img`
  position: relative;
  width: 150px;
  height: 100px;
  margin-right: 10px;
  border-bottom: ${({ isActive }: any) => `5px solid ${isActive ? '#0666CC' : 'transparent'}`};
  opacity: ${({ isActive }: any) => isActive ? 0.5 : 1};
  object-fit: cover;
  cursor: pointer;
`;

export const BookingForm = styled.div`
  border-radius: 2px;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Field = styled.div`
  margin-top: 10px;
`;

export const BookButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 2px;
  background: #0666CC;
  font-size: 14px;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
`;

export const MapContainer = styled.div`
  margin-top: 20px;
`;
