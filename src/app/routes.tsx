import * as React from 'react';
import Home from './home/home';
import About from "./about/about";
import { Route, Switch } from 'react-router-dom';
import Courses from "./courses/courses";
import CourseManager from './courses/course-manager';
import EditReadonly from './demos/edit-readonly';

export default class AppRoutes extends React.Component<any, any> {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/course" component={CourseManager} />
                <Route path="/course/:id" component={CourseManager} />
                <Route path="/demos" component={EditReadonly} />
            </Switch>
        );

    }
}