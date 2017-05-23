import { Course } from "../shared/course";
import { ActionCreator } from "redux";
import { CREATE_COURSE } from "./action-types";

export function createCourse(course: Course) {
    return { type: CREATE_COURSE, course }
}
