import React, { useState } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import * as S from './RecipientNumber.style'

interface PropsRecipientNumber {
    isOpenModalNumber: boolean;
    setIsOpenModalNumber: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecipientNumber = ( {isOpenModalNumber, setIsOpenModalNumber }:PropsRecipientNumber) => {
    const [inputValue, setInputValue] = useState('');
    const { userAuthorization, userData } = useTypedSelector ( state => state.userDataReducer)
    const { getRecipientNumberAction } = useActions()

    const closeModal = () => { setIsOpenModalNumber(false)}
    
    const addNumber = () => {
        if (!userAuthorization) {
            alert("Сначала авторизуйтесь")
            closeModal()
            return
        }
        getRecipientNumberAction(inputValue)
        setInputValue('')
        closeModal()
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.keyCode || event.which;

        if (
          (keyCode < 48 || keyCode > 57) &&
          keyCode !== 8 && // Backspace
          keyCode !== 46 // Delete
        ) {
          event.preventDefault();
        }
        
        if (inputValue.length >= 11 && keyCode !== 8 && keyCode !== 46) {
          event.preventDefault();
        }
        keyCode === 13 
            ? addNumber()
            : console.log(keyCode);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <S.RecipientNumber style={{display: isOpenModalNumber ? 'block' : 'none' }}>
            <h2> Введите номер пользователя </h2>
            <div>
                <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}/> 
                <button
                onClick={addNumber}
                > 
                    Добавить
                </button>
            </div>
            <S.ButtonCloseModal onClick={closeModal}>
              &times;
            </S.ButtonCloseModal>

        </S.RecipientNumber>
    )
}

export default RecipientNumber