import { styled } from "styled-components";

export const ChatsHeader = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #202c33;

    button {
        background-color: rgb(42, 57, 66);
        font-size: 16px;
        color: #fff;
        padding: 15px 20px;
        cursor: pointer;
        border: none;
        border-radius: 6px;

        &:hover{
            background-color: rgba(42, 157, 66, 0.5);
            outline: none;
            transition: 0.2s;
        }

        &:active{
            background-color: rgba(42, 157, 66, 0.8);
            outline: none;
            transition: 0.2s;
        }
    }
`
export const ButtonsContainer = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`