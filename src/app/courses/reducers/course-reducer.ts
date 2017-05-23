import * as TYPES from "../actions/action-types";
import initialState from './initial-state';

export default function CourseReducer(state = initialState.courses, action: any) {
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