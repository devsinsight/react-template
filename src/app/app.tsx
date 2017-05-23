import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config';
import Home from './home/home';
import AppRoutes from "./routes";
import Header from "./header/header";
import { loadCourses } from "./courses/actions/course-thunks";
import { loadAuthors } from "./courses/actions/author-thunks";

const store = configureStore();

//triggers initial value because there is a mock api :)
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <AppRoutes />
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }

}
