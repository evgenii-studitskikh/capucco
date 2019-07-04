import React from 'react';
import axios from 'axios';

import {
  Container,
} from './styled';
import {
  Field,
  Dropdown,
  Place,
} from '../styled';
import {
  ISubject,
  ISubjectProps,
  ISubjectState,
} from '../types';

export default class Subject extends React.Component<ISubjectProps, ISubjectState> {

  public state: ISubjectState = {
    inputValue: '',
    isTyping: null,
    isDropDownVisible: false,
    isDataLoading: true,
    data: []
  }

  public handleInputChange = (value: string) => {

    this.setState({
      inputValue: value,
      isDropDownVisible: true,
    })
  }

  public getSubjectsByQuery = (query: string) => {

    let subjectsData: any[] = [];

    if (query) {
      axios.get(`/api/subjectsearch?q=${query}`)
        .then((response) => {

          subjectsData = response.data || [];
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          this.setState({
            data: subjectsData
          })
        })
    }
    else {
      this.setState({
        data: []
      })
    }
    
  }

  public handleInputKeyUp = (e: any) => {

    const {
      isTyping
    } = this.state;

    const value = e.target.value;

    if (isTyping) {
      clearTimeout(isTyping);
    }

    this.setState({
      isTyping: setTimeout(() => {
        this.getSubjectsByQuery(value)
      }, 500)
   });
    
  }

  public handleSubjectChange = (subject: ISubject) => {

    this.setState({
      isDropDownVisible: false,
    })
  }

  static getDerivedStateFromProps = (nextProps: ISubjectProps, prevState: ISubjectState) => {

    return {
      inputValue: nextProps.subjectValue.id === 0
        ? prevState.inputValue 
        : nextProps.subjectValue.name
    };
  }

  render() {

    const {
      placeholder
    } = this.props;

    const {
      isDropDownVisible,
      inputValue,
      data,
    } = this.state;

    return (
      <Container>
        <Field
          placeholder={placeholder}
          onChange={(e: any) => this.handleInputChange(e.target.value)}
          onKeyUp={(e: any) => this.handleInputKeyUp(e)}
          value={inputValue}
        />
        {isDropDownVisible &&
          <Dropdown>
            {data.map((subject: ISubject, index: number) => 
              <Place 
                key={index}
                onClick={() => this.handleSubjectChange(subject)}
              >
                {subject.name}
              </Place>
            )}
          </Dropdown>
        }
      </Container>
    )
  }
}