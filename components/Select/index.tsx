import React from 'react';

import {
  Container,
  Field,
  Dropdown,
  Item
} from './styled';

interface IData {
  label: string,
  value: string
}

interface ISelectProps {
  label: string,
  data: IData[],
}

interface ISelectState {
  selectedItem: IData,
  isDropdownOpen: boolean,
}

export default class Select extends React.Component<ISelectProps, ISelectState> {
  
  ContainerRef: React.RefObject<any>;

  constructor(props: ISelectProps) {
    super(props);

    this.ContainerRef = React.createRef();
  }

  public state = {
    selectedItem: this.props.data[0],
    isDropdownOpen: false,
  }

  public handleFieldClick = () => {
    this.setState((prevState: ISelectState) => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  }

  public handleItemClick = (item: IData) => {
    this.setState((prevState: ISelectState) => ({
      selectedItem: item,
      isDropdownOpen: !prevState.isDropdownOpen
    }));

    window.console.log('item click!')
  }

  public handleClickOutside = (e: any) => {
    if (this.ContainerRef && !this.ContainerRef.current.contains(e.target)) {
      this.setState({
        isDropdownOpen: false
      });
    }
  }

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  
  public render() {

    const {
      label,
      data,
    } = this.props;

    const {
      selectedItem,
      isDropdownOpen
    } = this.state;

    return (
      <Container
        ref={this.ContainerRef}
      >
        {label}
        <Field
          onClick={this.handleFieldClick}
          isOpen={isDropdownOpen}
        >
          {selectedItem.label}
        </Field>
        {isDropdownOpen &&
          <Dropdown>
            {data.map((item: IData, index: number) =>
              <Item
                key={index}
                onClick={() => this.handleItemClick(item)}
              >
                {item.label}
              </Item>
            )}
          </Dropdown>
        }
      </Container>
    )
  }
}