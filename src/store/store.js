import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "./auth/auth.reducer";
import { projectReducer } from "./projects/project.reducer";
import { TaskReducer } from "./task/Task.reducer";

const rootReducer = combineReducers({
    projectData: projectReducer,
    auth: authReducer,
    taskData: TaskReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))