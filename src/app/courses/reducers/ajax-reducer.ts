import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import * as TYPES from "../actions/action-types";
import initialState from './initial-state';


export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action: any) {
    if (action.type == TYPES.BEGIN_AJAX_CALL)
        return state + 1;
    else if(actionTypeEndsInSuccess(action.type))
        return state - 1;
    return state;
}

function actionTypeEndsInSuccess(type: string){
    return type.substring(type.length - 8) == '_SUCCESS';
}