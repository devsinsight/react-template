import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as courseActions from './actions/course-actions';
import { bindActionCreators } from "redux";
import { CourseForm } from "./course-form";
import { Course } from "./shared/course";
import { CourseValidation } from "../validations/course-validation";
import { DropdownUtils } from "../common/utils/dropdown-utils";
import { Author } from './shared/author';

interface State{
    course: Course
}

export class CourseManager extends React.Component<any, State> {
    state = {
        course: Object.assign(new Course, this.props.course),
        errors: new CourseValidation()
    }

    public render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm 
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={[]} />
            </div>
        );
    }

    private static mapStateToProps(state: any) {
        
        let authorsFormattedForDropdown = DropdownUtils.dropdownFormatter(state.authors ,'fullName', 'id');

        return {
            authors: authorsFormattedForDropdown
        };
    };

    private static mapDispatchToProps(dispatch: Dispatch<any>) {
        return {
            actions: {
                createCourse: bindActionCreators(courseActions.createCourse, dispatch)
            }
        };
    };

    static connection() {
        return connect(
            CourseManager.mapStateToProps,
            CourseManager.mapDispatchToProps,
        )(CourseManager);
    }
}

export default CourseManager.connection();