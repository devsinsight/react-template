import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../courses/reducers/root';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState
        /*applyMiddleware(reduxImmutableStateInvariant())*/
    );
}