import React from "react";
import * as S from "./ChatElement.style";

interface PropsChatElement {
    recipientNumber: string
}

const ChatElement = ({recipientNumber} : PropsChatElement) => {

    function formatRussianPhoneNumber(phoneNumber: string) {
        return phoneNumber.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3 $4-$5');
    }

  return (
    <S.ChatElement>
      <S.UserIcon />
      <S.Number> {formatRussianPhoneNumber(recipientNumber)} </S.Number>
    </S.ChatElement>
  );
};

export default ChatElement;
