
export interface userDataState {
    userData: UserData;
    userAuthorization: boolean;
}
  
export interface UserData {
    apiTokenInstance: string;
    idInstance: string;
}

export enum UserDataActionTypes {
    SET_USER_AUTHORIZATION = "USER_AUTHORIZATION",
    SET_USER_DATA = "SET_USER_DATA",
}

interface SetUserAuthorizationAction {
    type: UserDataActionTypes.SET_USER_AUTHORIZATION,
    payload: boolean;
}

interface SetUserDataAction {
    type: UserDataActionTypes.SET_USER_DATA,
    payload: UserData,
}

export type userDataActions = SetUserDataAction | SetUserAuthorizationAction