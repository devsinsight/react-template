import * as React from "react";

export default class CourseList extends React.Component<any, any> {

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        )
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                {this.props.courses.map(this.courseRow)}
            </div>
        )
    }
}