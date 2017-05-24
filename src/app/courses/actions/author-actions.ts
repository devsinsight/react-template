import * as TYPES from "./action-types";
import { Author } from "../shared/author";

export function loadAuthorsSuccess(authors: Author[]) {
    return { type: TYPES.LOAD_AUTHORS_SUCCESS, authors }
}

