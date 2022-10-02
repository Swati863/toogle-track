import axios from "axios";
import { ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE_TASK_ERROR, DELETE_TASK_LOADING, DELETE_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS } from "./Task.types";


let token = localStorage.getItem("token") || ""

export const getTaskAPI = () => async (dispatch) => {

    dispatch({ type: GET_TASK_LOADING });
    try {
        const res = await axios.get("https://toggltrack-clone-backend.herokuapp.com/tasks", {
            headers: {
                token: token
            }
        })
        dispatch({ type: GET_TASK_SUCCESS, payload: res.data })
        console.log("Outside tasks")
    } catch (er) {
        dispatch({ type: GET_TASK_ERROR })
    }

}


export const postTaskAPI = (data) => async (dispatch) => {

    dispatch({ type: ADD_TASK_LOADING });
    try {
        const res = await axios.post("https://toggltrack-clone-backend.herokuapp.com/tasks", data, {
            headers: {
                token: token,
            }
        })
        // dispatch(getTaskAPI())
        dispatch({ type: ADD_TASK_SUCCESS, payload: res.data })


    } catch (er) {
        dispatch({ type: ADD_TASK_ERROR })
        console.log(er)
    }
}


export const removetaskAPI = (id) => async (dispatch) => {
    dispatch({ type: DELETE_TASK_LOADING });
    try {
        let res = await axios.delete(`https://toggltrack-clone-backend.herokuapp.com/tasks/${id}`, {
            headers: {
                token: token
            }
        });
        dispatch(getTaskAPI())
        dispatch({ type: DELETE_TASK_SUCCESS, payload: res.data });
        return res.data
    } catch (e) {
        dispatch({ type: DELETE_TASK_ERROR })
    }
}





