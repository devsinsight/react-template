import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './actions/course-actions';
import { Course } from "./shared/course";
import { CourseList } from "./course-list";


interface Props {
    actions: any;
    courses: Course[],
    history: any
}

export class Courses extends React.Component<Props, any> {

    constructor(){
        super();
        this.redirectToAddCourse = this.redirectToAddCourse.bind(this);
    }

    redirectToAddCourse(event){
        this.props.history.push('/course');
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCourse}/>
                <CourseList courses={this.props.courses} />
            </div>
        )
    }

    private static mapStateToProps(state, ownProps) {
        return { courses: state.courses }
    }

    private static mapDispatchToProps(dispatch) {
        return {}
    }

    static connection() {
        return connect(Courses.mapStateToProps, Courses.mapDispatchToProps)(Courses);
    }
}

export default Courses.connection();