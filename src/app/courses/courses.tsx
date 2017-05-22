import * as React from "react";
import { connect } from 'react-redux';
import CourseForm from "./course-form";
import * as courseActions from './actions/course-actions';
import { Course } from "./shared/course";

interface State{
    courses: []
}

interface Props{
    dispatch: any;
    courses: []
}

export class Courses extends React.Component<Props, any> {

    state = { course: new Course() }

    constructor(){
        super();
        this.onClickSave = this.onClickSave.bind(this);
    }

    onClickSave(course) {
        console.log("COURSE FROM PAGE: ", course)
        this.setState({ course: course })
        this.props.dispatch(courseActions.CreateCourse(this.state.course));
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                <CourseForm 
                    courses={this.state.courses}
                    onClickSave={this.onClickSave} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    console.log("STATE FROM MAP: ", state.courses)
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Courses);