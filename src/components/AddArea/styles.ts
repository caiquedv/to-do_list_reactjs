import styled from "styled-components";

export const Container = styled.label`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 5px 5px 0 5px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputContainer {
        display: flex;
        width:100%;
        border-bottom: 1px solid #555;
    }

    .image {
        margin-right: 5px;
        font-size: 30px;
        color: #0a0;
        user-select: none;
        cursor: pointer;
    }

    input {
        border: 0px;
        background-color: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }

    span {
        color: #444;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: #666;
        }
    }
`;