import * as React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './home/home';
import AppRoutes from "./routes";
import Header from "./header/header";

export default class App extends React.Component<any, any > {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container">
                    <AppRoutes/>
                    </div>
                </div>
            </Router>
        )
    }

}