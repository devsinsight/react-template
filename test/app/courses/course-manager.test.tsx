
import 'jsdom-global/register';
import * as expect from 'expect';
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { suite, test, slow, timeout } from "mocha-typescript";
import { CourseManager } from 'src/app/courses/course-manager';
import { Course } from "src/app/courses/models/course";

@suite("Course Manager Suite Tests")
class CouseFormTest {

    @test "sets error message when trying to save empty title"(){
        let props = {
            authors: [],
            course: new Course(),
            actions: {
                saveCourse: ()=>{ return Promise.resolve(); },
                ajaxCallError: ()=>{}
            }
        };

        let wrapper = mount(<CourseManager {...props} />);
        let saveButton = wrapper.find('input[type="submit"]');
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate("click");
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
    }

}