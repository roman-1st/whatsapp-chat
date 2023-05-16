import React from "react";
import * as S from './ChatsContainer.style'
import ChatsHeader from "./ChatsHeader/ChatsHeader";
import ChatsList from "./ChatsList/ChatsList";
import ChatsSearch from "./ChatsSearch/ChatsSearch";

const ChatsContainer = () => {

    return (
        <S.ChatsContaier>
            <ChatsHeader />
            <ChatsSearch />
            <ChatsList />
        </S.ChatsContaier>
    )
}

export default ChatsContainer