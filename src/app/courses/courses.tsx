import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject } from 'redux';
import * as courseActions from './actions/course-actions';
import { Course } from "./shared/course";
import { CourseList } from "./course-list";

interface Props {
    actions: any;
    courses: Course[]
}

export class Courses extends React.Component<Props, any> {

    constructor() {
        super();
        this.onClickSave = this.onClickSave.bind(this);
    }

    onClickSave(course) {
        this.props.actions.createCourse(course);
    }

    render() {
        return (
            <div>
                <CourseList courses={this.props.courses} />
            </div>
        )
    }

    static mapStateToProps(state, ownProps) {
        return { courses: state.courses }
    }

    static mapDispatchToProps(dispatch) {
        return {
            actions: {
                createCourse: bindActionCreators(courseActions.createCourse, dispatch)
            }

        }
    }
}

export default connect(Courses.mapStateToProps, Courses.mapDispatchToProps)(Courses);