import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import * as S from './FormData.style'

type AuthFormData = {
  idInstance: string;
  apiTokenInstance: string;
};

interface PropsFormData {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormData = ({ isOpen, setIsOpen }: PropsFormData) => {
  const { setUserDataAction, setUserAuthorizationAction } = useActions()
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>();

  const onSubmit = (data: AuthFormData) => {
    setIsOpen(false);
    setUserDataAction(data)
    setUserAuthorizationAction(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <S.FormData style={{display: isOpen ? 'block' : 'none'}}>
      {isOpen && (
        <S.ModalContent>
            <h2>Авторизация</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="idInstance">ID Instance</label>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("idInstance", { required: true })}
                />
                {/* {errors.idInstance && <span>Error!</span>} */}
              </div>

              <div>
                <label htmlFor="apiTokenInstance">API Token Instance</label>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("apiTokenInstance", { required: true })}
                />
                {/* {errors.apiTokenInstance && <span>Error!</span>} */}
              </div>

              <div>
                <button 
                type="submit">Получить доступ</button>
              </div>
            </form>
            <S.ButtonCloseModal onClick={closeModal}>
              &times;
            </S.ButtonCloseModal>
        </S.ModalContent>
      )}
    </S.FormData>
  );
};

export default FormData