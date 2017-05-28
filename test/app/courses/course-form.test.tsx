import { suite, test, slow, timeout } from "mocha-typescript";
import * as expect from 'expect';
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Course } from 'src/app/courses/models/course';
import { CourseForm } from 'src/app/courses/course-form';
import { CourseValidation } from "src/app/courses/validations/course-validation";


@suite("Course Form Suite Tests")
class CouseFormTest {

    setup(saving: boolean) {
        let props = {
            course: new Course(),
            allAuthors: [],
            errors: {},
            saving: saving
        }
        return shallow(<CourseForm {...props} />);
    }

    @test
    "renders form"() {
        let wrapper = this.setup(false);
        //console.log(wrapper.debug())
        expect(wrapper.find('form').length).toBe(1);
    }
    @test
    "save button is labeled 'Save' when not saving"() {
        let wrapper = this.setup(true);
        expect(wrapper.find('input[type="submit"]').props().value).toEqual('Saving...');
    }
}
