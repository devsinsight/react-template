import { Course } from "../models/course";
import { ActionCreator } from "redux";
import * as TYPES from "./action-types";

export function createCourseSuccess(course: Course) {
    return { type: TYPES.CREATE_COURSE_SUCCESS, course }
}

export function updateCourseSuccess(course: Course) {
    return { type: TYPES.UPDATE_COURSE_SUCCESS, course }
}


export function loadCoursesSuccess(courses: Course[]) {
    return { type: TYPES.LOAD_COURSES_SUCCESS, courses }
}