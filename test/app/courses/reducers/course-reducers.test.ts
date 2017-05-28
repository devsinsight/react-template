import * as types from 'src/app/courses/actions/action-types';
import { suite, test, slow, timeout } from "mocha-typescript";
import * as expect from 'expect';
import { Course } from 'src/app/courses/models/course';
import * as courseActions from 'src/app/courses/actions/course-actions';
import courseReducer from "src/app/courses/reducers/course-reducer";

@suite('Course Reducers Suite Tests')
class CourseReducersTest {

    @test "Should add course when passed CREATE_COURSE_SUCCESS"() {
        //arrange
        let initialState = [
            { title: 'Course A' },
            { title: 'Course B' }
        ];
        let newCourse = new Course();
        newCourse.title = 'Course C';
        let action = courseActions.createCourseSuccess(newCourse);

        //act
        let newState = courseReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('Course A');
        expect(newState[1].title).toEqual('Course B');
        expect(newState[2].title).toEqual('Course C');
    }

    @test "Should update course when passed UPDATE_COURSE_SUCCESS"() {
        //arrange
        let initialState = [
            { id:'1', title: 'Course A' },
            { id:'2', title: 'Course B' },
            { id:'3', title: 'Course C' }
        ];
        let course = new Course();
        course.id = "3"
        course.title = 'Course X';
        let action = courseActions.updateCourseSuccess(course);

        //act
        let newState = courseReducer(initialState, action);
        let updatedCourse = newState.find(a => a.id == course.id);
        let untouchedCourse = newState.find(a => a.id == '1');

        //assert
        expect(updatedCourse.title).toEqual("Course X");
        expect(untouchedCourse.title).toEqual("Course A");
        expect(newState.length).toEqual(3);
    }
}