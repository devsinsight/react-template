import { combineReducers } from 'redux';
import changeEditReadonlyState from '../demos/reducers/edit-readonly-reducer';
import courses from '../courses/reducers/course-reducer';
import authors from '../courses/reducers/author-reducer';
import ajaxCallsInProgress from "../courses/reducers/ajax-reducer";

export const rootReducer = combineReducers({
    courses,
    authors,
    changeEditReadonlyState,
    ajaxCallsInProgress
});