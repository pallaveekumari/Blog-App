import axios from "axios"
import * as types from "../AppReducer/actionTypes"


//create post
export const createPost=(payload)=>(dispatch)=>{
dispatch({type:types.CREATE_POST_REQUEST})
return axios.post("http://localhost:8080/posts",payload)
.then((res)=>{
    dispatch({type:types.CREATE_POST_SUCCESS})
})
.catch((err)=>{
    dispatch({type:types.CREATE_POST_FAILURE,error:err})
})

}