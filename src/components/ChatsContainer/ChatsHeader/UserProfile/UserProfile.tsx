import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import * as S from './UserProfile.style'

const UserProfile = () => {
    const { userAuthorization, userData } = useTypedSelector(state => state.userDataReducer)

        return (
            <S.UserProfile>
                <S.UserIcon 
                style={{
                    border: userAuthorization ? 'none' : '1px solid lightgray',
                    backgroundImage: userAuthorization ? 'url("/icons/userIcon.svg")' : 'none',
                }}/>
                <S.UserTitle 
                style={{ display: userAuthorization ? 'block' : 'none',}}> Id: {userData.idInstance}</S.UserTitle>
            </S.UserProfile>
        )



}

export default UserProfile