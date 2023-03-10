import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import { rootState } from "./reducers/rootReducer";

export const store = createStore((rootState), applyMiddleware(thunk))