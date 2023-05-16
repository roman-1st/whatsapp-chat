import React, { MouseEventHandler } from "react";
import * as S from './HeaderButtonsContainer.style'

interface PropsHeaderButtonsContainer {
    setIsOpenModalNumber: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderButtonsContainer = ({setIsOpenModalNumber} : PropsHeaderButtonsContainer) => {

    const openNewChat: MouseEventHandler<HTMLDivElement> = (event) => {
        setIsOpenModalNumber(true)
    };

    return (
        <S.HeaderButtonsContainer>
            <div> <img src="/icons/headerIcons/usersGroup.png" /> </div>
            <div> <img src="/icons/headerIcons/statusIcon.png" /> </div>
            <div onClick={openNewChat}> <img src="/icons/headerIcons/newChatIcon.png" /> </div>
            <div> <img src="/icons/headerIcons/headerSettingIcon.png" /> </div>
        </S.HeaderButtonsContainer>
    )
}

export default HeaderButtonsContainer