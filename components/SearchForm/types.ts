export interface ILocation {
  id: number,
  name: string,
}

export interface ILocationProps {
  locationValue: ILocation,
  onLocationChange: (location: ILocation) => void,
  placeholder: string,
}

export interface ILocationState {
  inputValue: string,
  isTyping: any,
  isDropDownVisible: boolean,
  data: ILocation[],
  isDataLoading: boolean,
}

export interface ISubject {
  id: number,
  name: string,
}

export interface ISubjectProps {
  value: ISubject,
  placeholder: string
}

export interface ISubjectState {
  inputValue: string,
  isTyping: any,
  isDropDownVisible: boolean,
  data: ISubject[],
  isDataLoading: boolean,
}
