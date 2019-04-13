import React from 'react';

import {
  Container,
  Field,
  Dropdown,
  Place,
} from './styled';

interface IPlace {
  id: number,
  name: string,
}

interface ILocationState {
  inputValue: string,
  isDropDownVisible: boolean,
  data: IPlace[],
  isDataLoading: boolean,
}

export default class Location extends React.Component<any, ILocationState> {

  public state = {
    inputValue: '',
    isDropDownVisible: false,
    isDataLoading: true,
    data: [
      {
        id: 1,
        name: 'Los Angeles, California, USA'
      },
      {
        id: 2,
        name: 'Los Cristianos, Canary Islands, Spain'
      },
      {
        id: 3,
        name: 'New York, New York State, USA'
      },
    ]
  }

  public handleInputChange = (value: string) => {

    this.setState({
      inputValue: value,
      isDropDownVisible: true,
    })
  }

  public handlePlaceClick = (id: number) => {

    window.console.log(`Handle location id ${id} click`);
  }

  render() {

    const { 
      isDropDownVisible,
      data, 
    } = this.state;

    const {
      inputValue
    } = this.props;
    
    return (
      <Container>
        <Field
          placeholder='Where do you want to learn?'
          onChange={(e: any) => this.handleInputChange(e.target.value)}
          value={inputValue}
        />
        {isDropDownVisible &&
          <Dropdown>
            {data.map((place: IPlace, index: number) => 
              <Place 
                key={index}
                onClick={() => this.handlePlaceClick(place.id)}
              >
                {place.name}
              </Place>
            )}
          </Dropdown>
        }
      </Container>
    )
  }
}