import axios from "axios";
import { GET_PROJECT_ERROR, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS } from "./project.types";
export const getProjectAPI=()=>async(dispatch)=>{
    dispatch({type:GET_PROJECT_LOADING});
    axios.get("https://toggl-backend.herokuapp.com/users").then((d) => {
        dispatch({type:GET_PROJECT_SUCCESS,payload:d.data});
      }).catch(()=>{
        dispatch({type:GET_PROJECT_ERROR})
      })
} 