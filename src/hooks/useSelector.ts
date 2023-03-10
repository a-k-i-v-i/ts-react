import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ActionType } from "../store/reducers/rootReducer";

export const useTypedSelector:TypedUseSelectorHook<ActionType> = useSelector