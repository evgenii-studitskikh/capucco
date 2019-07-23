import { Reducer } from "redux";

import {
  ICourse
} from '../../pages/course'

interface ICourseReducer {
  activeCourse: ICourse | null,
} 

const inititalState = {
  activeCourse: null
};

export const course: Reducer<ICourseReducer, any> = (state = inititalState, action) => {

  switch (action.type) {
    
    case 'SET_ACTIVE_COURSE':
      return {
        ...state,
        activeCourse: action.payload
      };

    default:
      return state;
  }
};
