import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import * as UserActionCreators from '../actionCreator/user'

export const useTypedDispatch = ()=>{
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}