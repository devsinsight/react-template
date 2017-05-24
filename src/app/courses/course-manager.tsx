import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as courseActions from './actions/course-actions';
import { bindActionCreators } from "redux";
import { CourseForm } from "./course-form";
import { Course } from "./shared/course";
import { CourseValidation } from "../validations/course-validation";
import { DropdownUtils } from "../common/utils/dropdown-utils";
import { Author } from './shared/author';
import { UrlUtils } from "../common/utils/url-utils";

export class CourseManager extends React.Component<Props, State> {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign(new Course, props.course),
            errors: new CourseValidation()
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        let courseId = UrlUtils.getUrlParams();

        if(courseId)
            this.setState({ course: Object.assign(new Course, nextProps.course)});
    }

    updateCourseState(event) {
        let field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        if(!this.state.course.id)
            this.props.actions.createCourse(this.state.course);
        else
            this.props.actions.updateCourse(this.state.course);

        this.props.history.push('/courses');
    }

    public render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse} />
            </div>
        );
    }



    private static mapStateToProps(state: any, ownProps: any) {
        let courseId = UrlUtils.getUrlParams();
        let course = new Course();
        if (courseId) course = state.courses.find((course: Course) => course.id === courseId);
        return {
            course: course,
            authors: DropdownUtils.dropdownFormatter(state.authors, 'fullName', 'id')
        };
    };

    private static mapDispatchToProps(dispatch: Dispatch<any>) {
        return {
            actions: {
                createCourse: bindActionCreators(courseActions.createCourseSuccess, dispatch),
                updateCourse: bindActionCreators(courseActions.updateCourseSuccess, dispatch)
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

interface CourseActions {
    createCourse: Function,
    updateCourse: Function
}

interface Props {
    authors: Author[],
    course: Course,
    actions: CourseActions,
    history: any
}

interface State {
    course: Course,
    errors: CourseValidation
}