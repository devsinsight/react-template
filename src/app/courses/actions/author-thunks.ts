import authorApi from '../../api/mock-author';
import { Author } from "../shared/author";
import { loadAuthorsSuccess } from "./author-actions";

export function loadAuthors() {
    return (dispatch) => {
        return authorApi.getAllAuthors()
            .then( (authors: Author[]) => {
                dispatch(loadAuthorsSuccess(authors))
            })
            .catch(error => {
                throw (error);
            })
    }
}