import authorApi from '../../api/mock-author';
import { Author } from "../models/author";
import { loadAuthorsSuccess } from "./author-actions";
import { beginAjaxCall, ajaxCallError } from "./ajax-status-actions";

export function loadAuthors() {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors()
            .then( (authors: Author[]) => {
                dispatch(loadAuthorsSuccess(authors))
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw (error);
            })
    }
}