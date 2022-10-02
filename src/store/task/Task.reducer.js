
import { ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE_TASK_ERROR, DELETE_TASK_LOADING, DELETE_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS } from "./Task.types";

const initialState = {
    getTasks: {
        loading: false,
        error: false,
    },
    addTask: {
        loading: false,
        error: false,
    },
    removeTask: {
        loading: false,
        error: false,
    },
    data: [],
};


export const TaskReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_TASK_LOADING: {
            return {
                ...state,
                getTasks: { ...state.getTasks, loading: true }
            }
        }
        case GET_TASK_ERROR: {
            return {
                ...state,
                getTasks: { ...state.getTasks, loading: false, error: true }
            }
        }
        case GET_TASK_SUCCESS: {
            return {
                ...state,
                getTasks: { ...state.getTasks, loading: false, error: false },
                data: payload
            }
        }
        case ADD_TASK_LOADING: {
            return {
                ...state,
                addTask: { ...state.addTask, loading: true }
            }
        }
        case ADD_TASK_ERROR: {
            return {
                ...state,
                addTask: { ...state.addTask, loading: false, error: true }
            }
        }
        case ADD_TASK_SUCCESS: {
            return {
                ...state,
                addTask: { ...state.addTask, loading: false, error: false },
                data: [...state.data, payload]
            }
        }
        case DELETE_TASK_LOADING: {
            return {
                ...state,
                removeTask: { ...state.removeTask, loading: true }
            }
        }
        case DELETE_TASK_ERROR: {
            return {
                ...state,
                removeTask: { ...state.removeTask, loading: false, error: true }
            }
        }
        case DELETE_TASK_SUCCESS: {
            return {
                ...state,
                removeTask: { ...state.removeTask, loading: false, error: false },
                data: []
            }
        }

        default: {
            return state
        }
    }
}

