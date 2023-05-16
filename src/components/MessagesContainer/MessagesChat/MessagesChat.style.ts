import { styled } from "styled-components";

export const MessagesChat = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
`

export const GetMessage = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    color: rgb(209, 215, 219);
    font-size: 18px;

    p {
        background: rgba(150, 50, 250, 0.7);
        padding: 10px 25px;
        border-radius: 15px;
        border: 0.5px solid white;
        margin-left: 30px;
        margin-right: 30px;
    }

`

export const SendMessage = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    color: rgb(209, 215, 219);
    font-size: 18px;
    margin-right: 30px;
    
    p {
        background: rgba(250, 150, 250, 0.3);
        padding: 10px 25px;
        border-radius: 15px;
        border: 0.5px solid white;
        margin-right: 30px;
        margin-left: 30px;

    }

`