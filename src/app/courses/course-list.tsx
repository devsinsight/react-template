import * as React from "react";
import { CourseListRow } from './course-list-row';

export const CourseList = ({courses}) => {
        return (
                <table className="table">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Title</th>
                            <th>Autor</th>
                            <th>Category</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => 
                            <CourseListRow key={course.id} course={course} />
                        )}
                    </tbody>
                </table>
        )

}