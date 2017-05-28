import { Dispatch } from 'react-redux';
import thunk from 'redux-thunk';
import * as types from 'src/app/courses/actions/action-types';
import { suite, test, slow, timeout } from "mocha-typescript";
import * as expect from 'expect';
import { Course } from 'src/app/courses/models/course';
import configureMockStore from 'redux-mock-store';
import * as courseActions from 'src/app/courses/actions/course-thunks';

@suite('Course Thunks Suite Tests')
class CourseThunksTest {

    middleware = [thunk];
    mockStore = configureMockStore(this.middleware);

    @test async "Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses"() {
        //arrange
        let course = new Course();
        let expectedAction = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.CREATE_COURSE_SUCCESS, body: { courses:[{...course}] } },
        ];

        //act
        let store = this.mockStore({courses:[]}, expectedAction);

        //assert (remember delay is set to 1s)
        await store.dispatch(courseActions.loadCourses())
            .then(()=>{
                let actions = store.getActions();
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            })

    }

}