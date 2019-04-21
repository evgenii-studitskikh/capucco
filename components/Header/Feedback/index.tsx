import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-left: 20px;
`;

const Title = styled.span`
  text-transform: uppercase;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  padding: 10px;
  border-radius: 2px;
  background: #FFFFFF;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
`;

interface IFeedbackState {
  isDropDownOpen: boolean
}

export default class Feedback extends React.Component<any, IFeedbackState> {

  public state = {
    isDropDownOpen: false
  }

  public handleTitleClick = () => {

    this.setState((prevState: IFeedbackState) => ({
      isDropDownOpen: !prevState.isDropDownOpen
    }));
  }

  public render() {

    const { isDropDownOpen } = this.state;

    return (
      <Container>
        <Title onClick={this.handleTitleClick}>Contact us</Title>
        {isDropDownOpen &&
          <Dropdown>
            Text
          </Dropdown>
        }
      </Container>
    )
  }
}