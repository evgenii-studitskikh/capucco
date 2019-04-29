import React from 'react';

import {
  Container,
  Wrapper,
  FilterItem,
  FilterButton,
  FilterDropdown,
} from './styled';

interface IFilterState {
  isPriceDropDownOpen: boolean,
  isTypeDropDownOpen: boolean,
  isRatingDropDownOpen: boolean,
}

export default class Filter extends React.Component<any, IFilterState> {

  public state = {
    isPriceDropDownOpen: false,
    isTypeDropDownOpen: false,
    isRatingDropDownOpen: false,
  }

  public handlePriceFilterClick = () => {
    this.setState((prevState: IFilterState) => ({
      isPriceDropDownOpen: !prevState.isPriceDropDownOpen
    }));
  }

  public handleTypeFilterClick = () => {
    this.setState((prevState: IFilterState) => ({
      isTypeDropDownOpen: !prevState.isTypeDropDownOpen
    }));
  }

  public handleRatingFilterClick = () => {
    this.setState((prevState: IFilterState) => ({
      isRatingDropDownOpen: !prevState.isRatingDropDownOpen
    }));
  }

  render() {

    const {
      isPriceDropDownOpen,
      isTypeDropDownOpen,
      isRatingDropDownOpen,
    } = this.state;

    return (
      <Container>
        <Wrapper>
          Filter
          <FilterItem>
            <FilterButton onClick={this.handlePriceFilterClick}>Price</FilterButton>
            {isPriceDropDownOpen &&
              <FilterDropdown>
                dropdown
              </FilterDropdown>
            }
          </FilterItem>
          <FilterItem>
            <FilterButton onClick={this.handleTypeFilterClick}>Type</FilterButton>
            {isTypeDropDownOpen &&
              <FilterDropdown>
                dropdown
              </FilterDropdown>
            }
          </FilterItem>
          <FilterItem>
            <FilterButton onClick={this.handleRatingFilterClick}>Rating</FilterButton>
            {isRatingDropDownOpen &&
              <FilterDropdown>
                dropdown
              </FilterDropdown>
            }
          </FilterItem>
        </Wrapper>
      </Container>
    )
  }
}
