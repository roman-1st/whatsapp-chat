import { styled } from "styled-components";

export const MessagesInputPlace = styled.div`
    width: calc(100% - 40px);
    height: 75px;
    // margin-top: 20px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #202c33;
    background-color: rgb(32, 44, 51);
    

    img {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    input {
        width: calc(85% - 20px);
        height: 40px;
        background-color: rgb(42, 57, 66);
        border: none;
        border-radius: 12px;
        padding-left: 20px;
        color: rgb(209, 215, 219);
        font-size: 16px;

        &:focus {
            outline:none;
        }
    }
`