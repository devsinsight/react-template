import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';
import { loadCourses } from "./app/courses/actions/course-thunks";
import { loadAuthors } from "./app/courses/actions/author-thunks";
import configureStore from "./app/store/config";

const store = configureStore();

//triggers initial value because there is a mock api :)
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'));
