import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/userReducer';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    user
});

const store = createStore(rootReducer, composeEnhacers(
    applyMiddleware(thunk)
));

export default store;   