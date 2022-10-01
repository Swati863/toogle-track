import { GET_PROJECT_ERROR, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS } from "./project.types"


const initialState={
    data:[],
    loading:false,
    error:false,
}
export const projectReducer = (state=initialState,{type,payload})=>{
    switch(type){ 
        case GET_PROJECT_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case GET_PROJECT_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case GET_PROJECT_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                data:payload,
            }
        }

        default:{
            return state
        }
    }
}