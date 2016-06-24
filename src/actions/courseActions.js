import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSucess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function loadCourses() {
  return dispatch => {
    return CourseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function saveCourse(course) {
  return dispatch => {
    return CourseApi.saveCourse(course)
      .then(savedCourse => {
        course.id ?
          dispatch(updateCourseSuccess(savedCourse)) :
          dispatch(createCourseSucess(savedCourse));
      })
      .catch(error => {
        throw(error);
      });
  };
}
