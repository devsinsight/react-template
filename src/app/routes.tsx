import * as React from 'react';
import Home from './home/home';
import About from "./about/about";
import { Route, Switch } from 'react-router-dom';

export default class AppRoutes extends React.Component<any, any > {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        );

    }
}