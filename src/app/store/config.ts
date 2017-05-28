import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./root";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

let isProd = process.env.NODE_ENV === "production";

export default function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, isProd ? null : reduxImmutableStateInvariant())
    );
}