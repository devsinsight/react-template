import * as React from "react";
import {connect} from 'react-redux';
import CourseForm from "./course-form";
import * as courseActions from './actions/course-actions';
import {Course} from "./shared/course";
import CourseList from "./course-list";

interface Props {
    dispatch : any;
    courses : Course[]
}

export class Courses extends React.Component<Props, any> {

    constructor() {
        super();
        this.onClickSave = this.onClickSave.bind(this);
    }

    onClickSave(course) {
        this.props.dispatch(courseActions.CreateCourse(course));
    }

    render() {
        return (
            <div>
                <CourseList courses={this.props.courses} />
                <CourseForm onClickSave={this.onClickSave}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return { courses: state.courses }
}

export default connect(mapStateToProps)(Courses);