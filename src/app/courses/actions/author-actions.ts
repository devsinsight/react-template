import * as TYPES from "./action-types";
import { Author } from "../models/author";

export function loadAuthorsSuccess(authors: Author[]) {
    return { type: TYPES.LOAD_AUTHORS_SUCCESS, authors }
}

