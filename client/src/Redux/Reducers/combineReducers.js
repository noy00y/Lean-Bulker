// Reducer Combiner:
import {combineReducers} from 'redux';
import reducerType from "./reducer_type";

const reducers = combineReducers({
    reducer: reducerType,
})
