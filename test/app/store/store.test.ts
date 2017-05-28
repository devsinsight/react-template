import { createStore } from 'redux';
import { suite, test, slow, timeout } from "mocha-typescript";
import * as expect from 'expect';
import { rootReducer } from "src/app/store/root";
import initialState from 'src/app/courses/reducers/initial-state';
import { Course } from 'src/app/courses/models/course';
import * as courseActions from 'src/app/courses/actions/course-actions';


@suite("Store Suite Tests")
class StoreTest {

    @test "Should handle create courses"() {
        //arrange
        let store = createStore(rootReducer, initialState);
        let course = new Course();
        course.title = 'Clean Code';

        //act
        let action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        //assert
        let actual = store.getState().courses[0];
        let expected = new Course();
        expected.title = "Clean Code";
        expect(actual).toEqual(expected);

    }
}
