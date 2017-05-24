import * as TYPES from "../actions/action-types";
import initialState from './initial-state';

export default function authorReducer(state = initialState.authors, action: any) {
    switch (action.type) {
        case TYPES.LOAD_AUTHORS_SUCCESS:
            return action.authors
        default:
            return state;
    }
}