import { Course } from './../shared/course';
import { CREATE_COURSE_SUCCESS } from './../actions/action-types';
import * as TYPES from "../actions/action-types";
import initialState from './initial-state';

export default function CourseReducer(state = initialState.courses, action: any) {
    switch (action.type) {
        case TYPES.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign(new Course, action.course)
            ];
        case TYPES.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter((course: Course) => course.id !== action.course.id),
                Object.assign(new Course, action.course)
            ];
        case TYPES.LOAD_COURSES_SUCCESS:
            return action.courses
        default:
            return state;
    }
}