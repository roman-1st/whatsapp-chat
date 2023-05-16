import { styled } from "styled-components";

export const ChatElement = styled.div`
    width: 100%;
    height: 70px;

    border-top: 1px solid rgba(209, 215, 219, 0.5);

    display: flex;
    align-items: center;
    border-collapse: collapse;

    &:last-child {
        border-bottom: 1px solid rgba(209, 215, 219, 0.5);
    }
`

export const UserIcon = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 30px;
    // border-radius: 50%;
    background: gray;
    cursor: pointer;

    background: none;
    background-image: url('/icons/recipientIcon.svg');
    background-size: cover;
`

export const Number = styled.div`
    font-size: 20px;
    margin-left: 50px;
    color: #d1d7db;
`