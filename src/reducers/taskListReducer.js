import * as types from '../actions/taskList/actionTypes';

const initialState = {
    taskList: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASK_LIST_SUCCESS: {
            console.log(action.taskList);
            return {
                ...state,
                taskList: action.taskList,
                error: null
            }
        }
        case types.GET_TASK_LIST_ERROR: {
            return {
                ...state,
                taskList: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}