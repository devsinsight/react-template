import { Course } from './../shared/course';
import courseApi from '../../api/mock-course';
import { beginAjaxCall } from './ajax-status-actions';
import { loadCoursesSuccess, updateCourseSuccess, createCourseSuccess } from "./course-actions";

export function loadCourses() {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses()
            .then((courses: Course[]) => {
                dispatch(loadCoursesSuccess(courses))
            })
            .catch(error => {
                throw (error);
            })
    }
}

export function saveCourse(course: Course) {
    return (dispatch, getState) => {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
            .then((savedCourse: Course) => {
                course.id ?
                    dispatch(updateCourseSuccess(savedCourse)) :
                    dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw (error);
            })
    }
}