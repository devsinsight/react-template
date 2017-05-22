import * as React from "react";
import { connect } from 'react-redux';
import CourseForm from "./course-form";
import * as courseActions from './actions/course-actions';
import { Course } from "./shared/course";

class Courses extends React.Component<any, any> {
    state = {
        course: new Course()
    }

    constructor(){
        super();
        this.onClickSave = this.onClickSave.bind(this);
    }

    onClickSave(course) {
        this.props.dispatch(courseActions.CreateCourse(course));
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                <CourseForm 
                    course={this.state.course}
                    onClickSave={this.onClickSave} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Courses);