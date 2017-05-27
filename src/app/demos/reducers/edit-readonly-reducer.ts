import * as TYPES from "../actions/action-types";


export default function changeEditReadonlyStateReducer(state = false, action: any) {
    switch (action.type) {
        case TYPES.CHANGE_MODE_SUCCESS:
            return action.switching;
        default:
            return state;
    }
}