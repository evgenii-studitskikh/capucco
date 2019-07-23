import {
  ICourse
} from '../../pages/course';

export type setActiveCourseType = (data: ICourse) => ({ type: 'SET_ACTIVE_COURSE', payload: ICourse });

export const setActiveCourse: setActiveCourseType = (courseData: ICourse) => ({
  type: 'SET_ACTIVE_COURSE',
  payload: courseData
});
