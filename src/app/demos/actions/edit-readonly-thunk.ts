import { changeEditReadonlyState } from "./edit-readonly-actions";

export function switchBetweenEditReadonly(switching: boolean) {
    return (dispatch, getState) => {
        let newSwitching = !switching;
        console.log(newSwitching)
        return dispatch(changeEditReadonlyState(newSwitching));
    }
}