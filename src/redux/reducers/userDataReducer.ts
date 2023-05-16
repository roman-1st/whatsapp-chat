import { userDataActions, UserDataActionTypes } from '../../types/userData';
import { userDataState } from '../../types/userData';

const initialState: userDataState = {
    userAuthorization: false,
    userData: {
        apiTokenInstance: '',
        idInstance: '',
    }

}

export const userDataReducer = ( state = initialState, action: userDataActions) : userDataState => {
    switch(action.type) {
        case UserDataActionTypes.SET_USER_AUTHORIZATION: 
            return {
                ...state,
                userAuthorization: action.payload
            }
        
        case UserDataActionTypes.SET_USER_DATA: 
            return {
                ...state,
                userData: {
                    apiTokenInstance: action.payload.apiTokenInstance,
                    idInstance: action.payload.idInstance,
                }
            }
        default: 
            return {
                ...state,
            }
    }
}