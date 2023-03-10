

import { combineReducers } from "redux";
import { UserReducers } from ".";

export const rootState = combineReducers({
    users : UserReducers
})

export type ActionType = ReturnType<typeof rootState> 