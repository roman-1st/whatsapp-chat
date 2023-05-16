import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ChatElement from "./ChatElement/ChatElement";
import * as S from './ChatsList.style'

const ChatsList = () => {
    const { recipientNumber } = useTypedSelector ( state => state.messagesDataReducer)
    
    
    return (
        <S.ChatsList>
            {
            recipientNumber !== null 
                ?<ChatElement recipientNumber={recipientNumber} />
                : ''
            }
        </S.ChatsList>
    )
}

export default ChatsList