import * as types from './action-types';

export function beginAjaxCall(){
    return { type: types.BEGIN_AJAX_CALL}
}

export function ajaxCallError(error: string){
    return { type: types.AJAX_CALL_ERROR, error }
}