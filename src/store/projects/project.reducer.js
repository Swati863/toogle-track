import { ADD_PROJECT_ERROR, ADD_PROJECT_LOADING, ADD_PROJECT_SUCCESS, GET_PROJECT_ERROR, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS, REMOVE_PROJECT_ERROR, REMOVE_PROJECT_LOADING, REMOVE_PROJECT_SUCCESS } from "./project.types"


const initialState = {
    getProjects: {
        loading: false,
        error: false,
    },
    addProject: {
        loading: false,
        error: false,
    },
    removeProject: {
        loading: false,
        error: false,
    },
    data: [],
};


export const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PROJECT_LOADING: {
            return {
                ...state,
                getProjects: { ...state.getProjects, loading: true }
            }
        }
        case GET_PROJECT_ERROR: {
            return {
                ...state,
                getProjects: { ...state.getProjects, loading: false, error: true }
            }
        }
        case GET_PROJECT_SUCCESS: {
            return {
                ...state,
                getProjects: { ...state.getProjects, loading: false, error: false },
                data: payload
            }
        }
        case ADD_PROJECT_LOADING: {
            return {
                ...state,
                addProject: { ...state.addProject, loading: true }
            }
        }
        case ADD_PROJECT_ERROR: {
            return {
                ...state,
                addProject: { ...state.addProject, loading: false, error: true }
            }
        }
        case ADD_PROJECT_SUCCESS: {
            return {
                ...state,
                addProject: { ...state.addProject, loading: false, error: false },
                data: payload
            }
        }
        case REMOVE_PROJECT_LOADING: {
            return {
                ...state,
                removeProject: { ...state.removeProject, loading: true }
            }
        }
        case REMOVE_PROJECT_ERROR: {
            return {
                ...state,
                removeProject: { ...state.removeProject, loading: false, error: true }
            }
        }
        case REMOVE_PROJECT_SUCCESS: {
            return {
                ...state,
                removeProject: { ...state.removeProject, loading: false, error: false },
                data: []
            }
        }

        default: {
            return state
        }
    }
}