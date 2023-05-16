import { MessagesActionTypes } from './../../types/messagesData';
import React from "react";

export const getRecipientNumberAction = (payload: string) => {
    return ({type: MessagesActionTypes.GET_RECIPIENT_NUMBER, payload})
}

export const getMessagesHistoryAction = (payload: any[]) => {
    return ({ type: MessagesActionTypes.GET_MESSAGES_HISTORY, payload})
}

export const exitProfileAction = () => {
    return ({ type: MessagesActionTypes.EXIT_PROFILE})
}