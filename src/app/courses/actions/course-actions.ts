import { Course } from "../shared/course";

export function CreateCourse(course: Course) {
    return {
        type: 'CREATE_COURSE',
        course
    }
}