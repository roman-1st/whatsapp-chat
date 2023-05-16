import { styled } from "styled-components";

export const RecipientNumber = styled.div`
    position: fixed;
    width: 450px;
    height: 100px;
    background: rgba(32, 44, 51, 0.5);
    top: calc( 50% - 50px);
    left: calc( 50% - 225px);
    border-radius: 12px;
    color: rgb(209, 215, 219);

    h2 {
        margin: 10px 30px;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    input {
        height: 40px;
        width: 220px;
        padding-left: 10px;
        background-color: rgb(42, 57, 66);
        border: none;
        border-radius: 6px;
        color: rgb(209, 215, 219);
        &:focus {
            outline: none;
        }
        margin-left: 30px;

    }

    button {
        border-radius: 6px;
        height: 40px;
        width: 100px;
        padding: 0;
        margin-right: 30px;
    }
`

export const ButtonCloseModal = styled.span`
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    color: rgb(209, 215, 219);
    font-size: 26px;
`