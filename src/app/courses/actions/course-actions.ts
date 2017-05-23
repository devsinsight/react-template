import { Course } from "../shared/course";
import { ActionCreator } from "redux";
import * as TYPES from "./action-types";

export function createCourse(course: Course) {
    return { type: TYPES.CREATE_COURSE, course }
}

export function loadCoursesSuccess(courses: Course[]) {
    return { type: TYPES.LOAD_COURSES_SUCCESS, courses }
}