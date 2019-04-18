import {combineReducers} from 'redux';

import taskListReducer from './taskListReducer'

export default (state = {}, action) => {
    return combineReducers({
        taskListReducer
    })(state, action);
}