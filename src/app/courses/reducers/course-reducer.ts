import { LOAD_COURSES_SUCCESS } from './../actions/action-types';
import * as TYPES from "../actions/action-types";

export default function CourseReducer(state: any = [], action: any) {
    switch (action.type) {
        case TYPES.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case TYPES.LOAD_COURSES_SUCCESS:
            return action.courses
        default:
            return state;
    }
}