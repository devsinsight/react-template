import * as types from 'src/app/courses/actions/action-types';
import { suite, test, slow, timeout } from "mocha-typescript";
import * as expect from 'expect';
import { Course } from 'src/app/courses/models/course';
import * as courseActions from 'src/app/courses/actions/course-actions';

@suite('Course Actions Suite Tests')
class CourseActionsTest{

    @test "Should create a CREATE_COURSE_SUCCESS action"(){
        //arrange
        let course = new Course();
        let expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course
        }

        //act
        let action = courseActions.createCourseSuccess(course);

        //assert
        expect(action).toEqual(expectedAction);
    }

}