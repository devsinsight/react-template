import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config';
import Home from './home/home';
import AppRoutes from "./routes";
import Header from "./header/header";

const store = configureStore();

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