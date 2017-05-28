import { changeEditReadonlyState } from "./edit-readonly-actions";

export function switchBetweenEditReadonly(switching: boolean) {
    return (dispatch, getState) => dispatch(changeEditReadonlyState(!switching));
}