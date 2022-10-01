import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { projectReducer } from "./projects/project.reducer";

const rootReducer=combineReducers({
    projectData:projectReducer
}); 
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))