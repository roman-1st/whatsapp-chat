export interface MessagesState {
    recipientNumber: string | null;
    messagesHistory: any[],
    messagesChat: any[],

    recipientSendMessage: string,
    recipientGetMessage: string,
}


export enum MessagesActionTypes {
    GET_RECIPIENT_NUMBER = "GET_RECIPIENT_NUMBER",
    GET_MESSAGES_HISTORY = "GET_MESSAGES_HISTORY",
    EXIT_PROFILE = "EXIT_PROFILE",

    SEND_MESSAGE = "SEND_MESSAGE",
    GET_MESSAGE = "GET_MESSAGE",
}

interface GetRecipientNumberAction {
    type: MessagesActionTypes.GET_RECIPIENT_NUMBER,
    payload: string,
}

interface ExitProfileAction {
    type: MessagesActionTypes.EXIT_PROFILE,
}

interface getMessagesHistoryAction {
    type: MessagesActionTypes.GET_MESSAGES_HISTORY,
    payload: any[],
}

interface SendMessageAction {
    type: MessagesActionTypes.SEND_MESSAGE,
    payload: any,
}

interface GetMessageAction {
    type: MessagesActionTypes.GET_MESSAGE,
    payload: any,
}

export type MessageActions = 
    GetRecipientNumberAction |
    getMessagesHistoryAction |
    ExitProfileAction |


    SendMessageAction |
    GetMessageAction