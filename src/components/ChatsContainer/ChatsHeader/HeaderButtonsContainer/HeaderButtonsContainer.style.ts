import { styled } from "styled-components";

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;

    div {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        cursor: pointer;

        &:hover:nth-child(3) {
            background: rgba(209, 215, 219, 0.2);
            transition: 0.2s;
        }

        img {
            width: 20px;
            height: 20px;
        }
        img:nth-child(1) {
            position: absolute;
            top: 11px;
        }
    }

    div:nth-child(2) {
        img {
            position: absolute;
            top: 13px;
        }
    }

    div:nth-child(3) {
        img {
            position: absolute;
            top: 12px;
        }
    }

    div:nth-child(4) {
        img {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 13px;
        }
    }

    
`