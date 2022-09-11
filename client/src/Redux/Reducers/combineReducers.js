// Reducer Combiner:
import {combineReducers} from 'redux';
import loggedReducer from './isLogged';
import reducerType from "./reducer_type";

const reducers = combineReducers({
    reducer: reducerType,
    isLogged: loggedReducer
})

export default reducers;