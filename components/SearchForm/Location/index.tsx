import React from 'react';

import {
  Container,
  Field,
  Dropdown,
  Place,
} from './styled';
import {
  ILocation,
} from '../types';

interface ILocationProps {
  locationValue: ILocation,
  onLocationChange: (location: ILocation) => void,
  placeholder: string,
}

interface ILocationState {
  inputValue: string,
  isDropDownVisible: boolean,
  data: ILocation[],
  isDataLoading: boolean,
}

export default class Location extends React.Component<ILocationProps, ILocationState> {

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

    const {
      onLocationChange
    } = this.props;

    onLocationChange({
      id: 0,
      name: ''
    });

    this.setState({
      inputValue: value,
      isDropDownVisible: true,
    })
  }

  public handleLocationChange = (location: ILocation) => {

    const {
      onLocationChange
    } = this.props;

    onLocationChange(location);

    this.setState({
      isDropDownVisible: false,
    })
  }

  static getDerivedStateFromProps = (nextProps: ILocationProps, prevState: ILocationState) => {

    return {
      inputValue: nextProps.locationValue.id === 0
        ? prevState.inputValue 
        : nextProps.locationValue.name
    };
  }

  render() {

    const { 
      isDropDownVisible,
      data,
      inputValue,
    } = this.state;

    const {
      placeholder
    } = this.props;
  
    return (
      <Container>
        <Field
          placeholder={placeholder}
          onChange={(e: any) => this.handleInputChange(e.target.value)}
          value={inputValue}
        />
        {isDropDownVisible &&
          <Dropdown>
            {data.map((place: ILocation, index: number) => 
              <Place 
                key={index}
                onClick={() => this.handleLocationChange(place)}
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