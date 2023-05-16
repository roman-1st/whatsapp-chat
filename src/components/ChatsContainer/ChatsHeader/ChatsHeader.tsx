import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import * as S from './ChatsHeader.style'
import FormData from "./FormData/FormData";
import HeaderButtonsContainer from "./HeaderButtonsContainer/HeaderButtonsContainer";
import RecipientNumber from "./RecipientNumber/RecipientNumber";
import UserProfile from "./UserProfile/UserProfile";

const ChatsHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userAuthorization } = useTypedSelector(state => state.userDataReducer)
    const { setUserAuthorizationAction, exitProfileAction } = useActions()
    const [isOpenModalNumber, setIsOpenModalNumber ] = useState(false)

    const authorization = () => {
        setIsOpen(true)
    }

    const exitProfile = () => {
        setUserAuthorizationAction(false) 
        exitProfileAction()
    }

    return (
        <S.ChatsHeader>
            <UserProfile />
            <FormData isOpen={isOpen} setIsOpen={setIsOpen} />
            <RecipientNumber isOpenModalNumber={isOpenModalNumber} setIsOpenModalNumber={setIsOpenModalNumber} />
            <S.ButtonsContainer>
                <button 
                onClick={ userAuthorization ? () => exitProfile() : () => authorization() }> 
                    { userAuthorization ? 'Выйти' : 'Войти'} 
                </button>
                <HeaderButtonsContainer setIsOpenModalNumber={setIsOpenModalNumber} /> 
            </S.ButtonsContainer>

        </S.ChatsHeader>
    )
}

export default ChatsHeader