import { styled } from "styled-components";

export const ChatsSearch = styled.div`
    margin-top: 10px;

    div {
        width: 100%;
        // margin: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 60px;
            width: 15px;
            height: 15px;
            background-image: url('/icons/inputIcons/searchIcon.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        input {
            width: calc(85% - 60px);
            height: 30px;
            border-radius: 12px;
            border: none;
            background: #202c33;
            padding-left: 60px;
            color: #d1d7db;
            &:focus {
                outline: none;
            }
        }
        img{
            width: 15px;
            height: 15px;
            rotate: 180deg;
        }


    }


`