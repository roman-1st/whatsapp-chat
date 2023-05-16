import { UserData } from './../../types/userData';
import { MessageActions, MessagesActionTypes } from '../../types/messagesData';
import axios from "axios"
import { Dispatch } from 'react';
import { getMessagesHistoryAction } from './messagesData-actions';

export const SendMessage = (message: string, userData: UserData, chatId: string | null) => {
    console.log('SendMessage');
    return async (dispatch: Dispatch<MessageActions>) => {
        try {
            const data = {
                idInstance: userData.idInstance,
                apiTokenInstance: userData.apiTokenInstance,
            };
            const requestBody = {
                chatId: `${chatId}@c.us`,
                message: message,
            }
            console.log(requestBody);
            
            const response = await axios.post (`https://api.green-api.com/waInstance${data.idInstance}/SendMessage/${data.apiTokenInstance}`, requestBody)
            console.log(response.data);
            const dataMessage = [{
                type: 'outgoing',
                textMessage: message,
                idMessage: response.data.idMessage
            }]

            dispatch( {type:MessagesActionTypes.SEND_MESSAGE, payload: dataMessage})
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const ReceiveNotification = (userData: UserData) => {
    console.log('ReceiveNotification');
    
    return async (dispatch: Dispatch<MessageActions>) => {
        try {
            const data = {
                idInstance: userData.idInstance,
                apiTokenInstance: userData.apiTokenInstance,
            };
            const response = await axios.get (`https://api.green-api.com/waInstance${data.idInstance}/ReceiveNotification/${data.apiTokenInstance}`)
            axios.delete (`https://api.green-api.com/waInstance${data.idInstance}/DeleteNotification/${data.apiTokenInstance}/${response.data.receiptId}`)

            if( response.data.body.typeWebhook == 'incomingMessageReceived') {
                console.log(response.data.body.idMessage
                    );
                const dataMessage = [{
                    type: 'get',
                    textMessage: response.data.body.messageData.textMessageData.textMessage,
                    idMessage: response.data.body.idMessage
                }]
                dispatch( {type:MessagesActionTypes.GET_MESSAGE, payload: dataMessage})
                // axios.delete (`https://api.green-api.com/waInstance${data.idInstance}/DeleteNotification/${data.apiTokenInstance}/${response.data.receiptId}`)
            }

        } catch (e: any) {
            console.log(e.message);
        }
    }
}

// export const GetChatHistory = (userData: UserData, chatId: string | null) => {
//     console.log('GetChatHistory');
//     if (chatId === null) return

//     return async (dispatch: Dispatch<MessageActions>) => {
//         try {
//             const data = {
//                 idInstance: userData.idInstance,
//                 apiTokenInstance: userData.apiTokenInstance,
//             };
//             const requestBody = {
//                 chatId: `${chatId}@c.us`,
//                 count: 5,
//             }
//             const response = await axios.post (`https://api.green-api.com/waInstance${data.idInstance}/GetChatHistory/${data.apiTokenInstance}`, requestBody)
//             console.log(response.data);
            
//             // dispatch( {type:MessagesActionTypes.GET_MESSAGES_HISTORY, payload: response.data})
//             console.log(response.data);
//         } catch (e: any) {
//             console.log(e.message);
//         }
//     }
// }

