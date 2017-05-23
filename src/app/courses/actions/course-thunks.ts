import { Course } from './../shared/course';
import courseApi from '../../api/mock-course';
import { loadCoursesSuccess } from "./course-actions";

export function loadCourses() {
    return (dispatch) => {
        return courseApi.getAllCourses()
            .then( (courses: Course[]) => {
                dispatch(loadCoursesSuccess(courses))
            })
            .catch(error => {
                throw (error);
            })
    }
}