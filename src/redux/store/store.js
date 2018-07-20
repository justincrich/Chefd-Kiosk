import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
//Reducers
import reducers from '../reducers/index';
const loggerMiddleware = createLogger();



const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunkMiddleware,
    loggerMiddleware));

export default store;