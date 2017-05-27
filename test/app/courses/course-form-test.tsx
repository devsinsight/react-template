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
            errors: {}
        }
        return shallow(<CourseForm {...props} />);
    }

    @test("renders form")
    method1() {
        let wrapper = this.setup(false);

        console.log(wrapper.debug())

        expect(wrapper.find('form').length).toBe(1);
    }

}
