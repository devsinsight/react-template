import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { CourseForm } from "./course-form";
import { Course } from "./models/course";
import { DropdownUtils } from "../common/utils/dropdown-utils";
import { Author } from './models/author';
import { UrlUtils } from "../common/utils/url-utils";
import { saveCourse } from "./actions/course-thunks";
import * as toastr from 'toastr';
import { ajaxCallError } from "./actions/ajax-status-actions";
import { CourseValidation } from "src/app/courses/validations/course-validation";

export class CourseManager extends React.Component<Props, State> {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign(new Course, props.course),
            errors: new CourseValidation(),
            saving: false
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.redirect = this.redirect.bind(this)
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.course)
            this.setState({ course: Object.assign(new Course, nextProps.course) });
    }

    updateCourseState(event) {
        let field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    courseFormIsValid() {
        if (this.state.course.title.length < 5)
            this.state.errors.title = 'Title must be at least 5 characters.';

        return this.state.errors.isValid();
    }

    saveCourse(event) {
        event.preventDefault();

        if (this.courseFormIsValid()) return;


        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(this.redirect)
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
                this.props.actions.ajaxCallError(error);
            });

    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
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
                    onSave={this.saveCourse}
                    saving={this.state.saving} />
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
                saveCourse: bindActionCreators(saveCourse, dispatch),
                ajaxCallError: bindActionCreators(ajaxCallError, dispatch)
            }
        };
    };

    static connection() {
        return connect(
            CourseManager.mapStateToProps,
            CourseManager.mapDispatchToProps
        )(CourseManager);
    }
}

export default CourseManager.connection();

interface CourseActions {
    saveCourse: Function,
    ajaxCallError: Function
}

interface Props {
    authors: Author[],
    course: Course,
    actions?: CourseActions,
    history?: any
}

interface State {
    course: Course,
    errors: CourseValidation,
    saving: boolean
}