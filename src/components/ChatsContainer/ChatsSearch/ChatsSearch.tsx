import React from "react";
import * as S from './ChatsSearch.style'

const ChatsSearch = () => {

    return (
        <S.ChatsSearch>
            <div>
                <input
                placeholder="Введите что-нибудь"
                />
                <img src='/icons/inputIcons/filterIcon.png' />
            </div>
        </S.ChatsSearch>
    )
}

export default ChatsSearch