
import { MessagesState, MessageActions, MessagesActionTypes } from '../../types/messagesData';
import { userDataActions, UserDataActionTypes } from '../../types/userData';
import { userDataState } from '../../types/userData';

const initialState: MessagesState = {
    recipientNumber: null,
    messagesChat: [],

    messagesHistory: [],
    recipientSendMessage: '',
    recipientGetMessage: '',

}

export const messagesDataReducer = ( state = initialState, action: MessageActions) : MessagesState => {
    switch(action.type) {
        case MessagesActionTypes.GET_RECIPIENT_NUMBER: 
            return {
                ...state,
                recipientNumber: action.payload,
            }
        case MessagesActionTypes.GET_MESSAGES_HISTORY: 
        return {
            ...state,
            messagesHistory: [...action.payload],
        }
        case MessagesActionTypes.SEND_MESSAGE:
            return {
                ...state,
                messagesChat: [...state.messagesChat, ...action.payload ]
            }
        case MessagesActionTypes.GET_MESSAGE:
            const checkMessage = state.messagesChat.find(el => el.idMessage === action.payload[0].idMessage)
            if (checkMessage === undefined) {
                return {
                    ...state,
                    messagesChat: [...state.messagesChat, ...action.payload ]
                }
            }
            return {
                ...state,
            }

        case MessagesActionTypes.EXIT_PROFILE:
            return {
                ...state,
                recipientNumber: null,
                messagesChat: [],
                messagesHistory: [],
                recipientGetMessage: '',
                recipientSendMessage: '',
            }
        default: 
            return {
                ...state,
            }
    }
}