import { userDataReducer } from './userDataReducer';

import { combineReducers } from "redux";
import { messagesDataReducer } from './messagesDataReducer';

export const rootReducer = combineReducers({
    userDataReducer: userDataReducer,
    messagesDataReducer: messagesDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>