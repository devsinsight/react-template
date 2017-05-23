import { ActionCreator } from "redux";
import * as TYPES from "./action-types";
import { Author } from "../shared/author";

export function loadAuthorsSuccess(courses: Author[]) {
    return { type: TYPES.LOAD_AUTHORS_SUCCESS, courses }
}

