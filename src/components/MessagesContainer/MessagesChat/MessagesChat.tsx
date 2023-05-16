import React, { useEffect, useMemo } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { UserData } from "../../../types/userData";
import * as S from './MessagesChat.style'

interface PropsMessagesChat {
    userData: UserData,
    messagesChat: any[],
}

const MessagesChat = ( {userData, messagesChat} : PropsMessagesChat) => {
    const { recipientNumber } = useTypedSelector(state => state.messagesDataReducer)
    const { ReceiveNotification } = useActions()

    const getRecive = () => {
        ReceiveNotification(userData)
    }

    useEffect(() => {
        if(recipientNumber) {
            const interval = setInterval(() => {
                getRecive()
            }, 1000);
            
        return () => {
            clearInterval(interval);
            };
        }

    }, [recipientNumber]);

    
    return (
        <S.MessagesChat>
            {
                messagesChat.map ( el => (
                    el.type === 'outgoing'
                        ?  <S.SendMessage key={el.idMessage}> <p> {el.textMessage} </p>  </S.SendMessage>
                        : <S.GetMessage key={el.idMessage}> <p>{el.textMessage} </p>  </S.GetMessage>

                ))
            }

        </S.MessagesChat>
    )
}

export default MessagesChat