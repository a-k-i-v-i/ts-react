export interface IUserState {
    users : any[],
    loading: boolean,
    error: null | string
}

export enum EnumActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}
interface IFetchUser {
    type: EnumActionTypes.FETCH_USER
   
}
interface IFetchUerSuccess {
    type: EnumActionTypes.FETCH_USER_SUCCESS,
    payload : any[]
}
interface IFetchUerError {
    type: EnumActionTypes.FETCH_USER_ERROR,
    payload : string
}



export type TypeUserAction = IFetchUser | IFetchUerSuccess | IFetchUerError