import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { UserData } from "../../../types/userData";
import * as S from './MessagesInputPlace.style'

interface PropsMessagesInputPlace {
    userData: UserData,
    recipientNumber: string | null,
}

const MessagesInputPlace = ({recipientNumber, userData} : PropsMessagesInputPlace) => {
    
    const { SendMessage } = useActions()
    const [inputValue, setInputValue] = useState('');

    

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInoutClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            SendMessage(inputValue, userData, recipientNumber);
            setInputValue('')
        }
    }

    return (
        <S.MessagesInputPlace>
            <img src="/icons/messagesIcons/messagesSmileIcon.png" />
            <img src="/icons/messagesIcons/attachmentIcon.png" />
            <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleInoutClick}/>
            <img src="/icons/messagesIcons/microIcon.png" />
        </S.MessagesInputPlace>
    )
}

export default MessagesInputPlace