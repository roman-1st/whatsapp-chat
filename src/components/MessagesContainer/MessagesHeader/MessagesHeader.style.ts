import { styled } from "styled-components";

export const MessagesHeader = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #202c33;

`

export const HeaderMessagesLeft = styled.div`
    margin-left: 15px;
    display: flex;
    align-items: center;

`


export const UserIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: gray;
    cursor: pointer;
`

export const UserNameContainer = styled.div`
    width: 250px;
    height: 50px;
    margin-left: 15px;

    display: flex;
    flex-direction: column;
    align-items: left;

    h5 {
        margin: 0;
        font-size: 18px;
        color: #d1d7db;
        cursor: pointer;
    }

    p {
        margin: 0;
        margin-top: 10px;
        font-size: 15px;
        color: #aebac1;
    }
`

export const MessageButtons = styled.div`
    width: 70px;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`