// General Imports:
import react from 'react';
import ReactDOM  from 'react-dom';
import App from '../App';

// Redux:
import {createStore} from 'redux';
import reducers from './Reducers';

// Create Store:
const store = createStore(reducers);