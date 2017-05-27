import * as TYPES from "../actions/action-types";

export function changeEditReadonlyState(switching: boolean){
    return { type: TYPES.CHANGE_MODE_SUCCESS, switching }
}