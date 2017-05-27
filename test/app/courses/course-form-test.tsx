import { suite, test, slow, timeout } from "mocha-typescript";
import * as expect from 'expect';
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Course } from 'src/app/courses/shared/course';
import { CourseForm } from 'src/app/courses/course-form';
import { CourseValidation } from "src/app/validations/course-validation";


@suite()
class CouseFormTest {

    setup(saving: boolean) {
        let props = {
            course: new Course(), 
            allAuthors: [], 
            errors: {},
            loading: saving
        }
        return shallow(<CourseForm {...props} />);
    }

    @test("renders form and h1")
    method1() {
        let wrapper = this.setup(false);

        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    }

}
