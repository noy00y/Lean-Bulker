// General Imports:
import react from 'react';
import ReactDOM  from 'react-dom';
import App from '../App';

// Redux:
import {createStore} from 'redux';
import reducers from './Reducers';

// Create Store:
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);