import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MessagesChat from "./MessagesChat/MessagesChat";
import * as S from './MessagesContainer.style'
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import MessagesInputPlace from "./MessagesInputPlace/MessagesInputPlace";

const MessagesContainer = () => {
    const { userData } = useTypedSelector ( state => state.userDataReducer)
    const { recipientNumber, messagesChat } = useTypedSelector ( state => state.messagesDataReducer)

    return (
        <S.MessagesContainer>
            <MessagesHeader recipientNumber={recipientNumber} />
            <MessagesChat messagesChat={messagesChat} userData={userData} />
            <MessagesInputPlace recipientNumber={recipientNumber} userData={userData} />
        </S.MessagesContainer>
    )
}

export default MessagesContainer