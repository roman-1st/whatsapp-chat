import { UserDataActionTypes, UserData } from '../../types/userData';

export const setUserAuthorizationAction = ( payload: boolean) => {
    return ({ type: UserDataActionTypes.SET_USER_AUTHORIZATION, payload })
}

export const setUserDataAction = (payload: UserData) => {
    return ({ type: UserDataActionTypes.SET_USER_DATA, payload })
}