import { styled } from "styled-components";

export const FormData = styled.div`
    position: fixed;
    width: 400px;
    height: 250px;
    background: rgba(32, 44, 51, 0.5);
    top: calc( 50% - 125px);
    left: calc( 50% - 175px);
    border-radius: 12px;
`
export const ModalContent = styled.div`
    margin: 15px;
    position: relative;
    color: rgb(209, 215, 219);
    font-size: 16px;

    h2 {
        font-size: 10px important!;
    }

    form {
        div:nth-child(1) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;

            input {
                height: 30px;
                width: 190px;
                padding-left: 10px;
                background-color: rgb(42, 57, 66);
                border: none;
                border-radius: 12px;
                color: rgb(209, 215, 219);
                &:focus {
                    outline: none;
                }
            }
        }

        div:nth-child(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            
            input {
                height: 30px;
                width: 190px;
                padding-left: 10px;
                background-color: rgb(42, 57, 66);
                border: none;
                border-radius: 12px;
            color: rgb(209, 215, 219);


                &:focus {
                    background-color: rgb(42, 57, 66);
                    outline: none;
                }
            }
        }
    }
`

export const ButtonCloseModal = styled.span`
    position: absolute;
    top: -10px;
    right: 0;
    cursor: pointer;
    color: rgb(209, 215, 219);
    font-size: 26px;
`