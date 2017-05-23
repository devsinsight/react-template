import * as TYPES from "../actions/action-types";

export default function CourseReducer(state: any = [], action: any) {
    switch (action.type) {
        case TYPES.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}