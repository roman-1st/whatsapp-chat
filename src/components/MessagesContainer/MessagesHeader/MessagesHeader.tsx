import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import * as S from "./MessagesHeader.style";

interface PropsMessagesHeader {
    recipientNumber: string | null
}

const MessagesHeader = ({recipientNumber} : PropsMessagesHeader) => {

  function formatRussianPhoneNumber(phoneNumber: string) {
    return phoneNumber.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3 $4-$5');
}


  return (
    <S.MessagesHeader>
      <S.HeaderMessagesLeft>
        <S.UserIcon />
        <S.UserNameContainer>
          <h5> {recipientNumber ?  formatRussianPhoneNumber(recipientNumber)  : "User name"}</h5>
          <p> online time</p>
        </S.UserNameContainer>
      </S.HeaderMessagesLeft>
      <S.MessageButtons>
        <img src="/icons/messagesIcons/searchMessages.png" />
        <img src="/icons/messagesIcons/settingMessages.png" />
      </S.MessageButtons>
    </S.MessagesHeader>
  );
};

export default MessagesHeader;
