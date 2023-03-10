import axios from "axios"
import { Dispatch } from "redux"
import { EnumActionTypes, IUserState, TypeUserAction } from "../types/ActionTypes"

export const fetchUsers  = () =>{
    return async(dispatch:Dispatch<TypeUserAction>)=>{
        try{
            dispatch({type: EnumActionTypes.FETCH_USER, loading: true})
            const res = await axios(`https://jsonplaceholder.typicode.com/users`)
            dispatch({type: EnumActionTypes.FETCH_USER_SUCCESS, payload: res.data})
        }catch(e){
            dispatch({type: EnumActionTypes.FETCH_USER_ERROR,  payload: 'Error!'})
        }
    }
}