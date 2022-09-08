import react from 'react';
import reactDom from 'react-dom'
import {createStore} from 'redux';

// Global State:


// Action "State of the Action": 
const action_type = () => {
    return {
        type: "action_name"
    }
}

// Reducer "State Changer": 
const reducer = (action) => {
    switch(action_type.type) {
        case "action_name":
            return; 
    }
}

// Create Store and pass in reducers
let store = createStore(reducer); 

// Dispatch Store:
store.dispatch(action_type);