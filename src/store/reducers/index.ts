
import { EnumActionTypes, IUserState, TypeUserAction } from "../../types/ActionTypes"

const initialState: IUserState = {
    users : [],
    loading : false,
    error: null
}




export const UserReducers = (state = initialState, action: TypeUserAction): IUserState =>{
    switch(action.type){
       case EnumActionTypes.FETCH_USER :{
        return{...state, loading : true}
       }
       case EnumActionTypes.FETCH_USER_SUCCESS :{
        return {...state, loading: false, users : action.payload}
       }
       case EnumActionTypes.FETCH_USER_ERROR :{
        return{...state, loading: false, users: [], error: action.payload}
       }

       default:
        return state
    }
}