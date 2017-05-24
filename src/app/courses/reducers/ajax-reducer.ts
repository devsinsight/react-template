import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import * as TYPES from "../actions/action-types";
import initialState from './initial-state';


export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action: any) {
    if (action.type == TYPES.BEGIN_AJAX_CALL)
        return state + 1;

    return state;
}
