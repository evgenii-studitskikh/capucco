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
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.5);
  }
`;

export const ImageContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  cursor: pointer;
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
  font-size: 16px;
  color: #001666;
  cursor: pointer;
`;

export const Address = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: #434656;
`;

export const Description = styled.p`
  font-size: 13px;
  margin: 10px 0 0;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 200px;
  margin-left: 10px;
`;

export const Price = styled.span`
  margin-top: 10px;
  font-size: 18px;
`;

export const Options = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Option = styled.li`
  display: inline;
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid #64c178;
  border-radius: 2px;
  background: #64c178;
  color: #ffffff;
`;

export const Book = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border: none;
  border-radius: 2px;
  background: #0666CC;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  font-weight: bold;
  cursor: pointer;

  .injected-svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    color: #434656;
  }

  path {
    fill: #434656;
    transition: .3s ease-in-out;
  }

  &:hover {
    path {
      fill: #0666CC;
      transition: .3s ease-in-out;
    }
  }
`;

export const Availability = styled.div`
  margin-top: 5px;
  text-transform: lowercase;
`;
