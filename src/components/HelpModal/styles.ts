import styled from "styled-components";

export const Help = styled.div`
    position: absolute;
    top: 3rem;
    left: 2rem;
    right: 2rem;
    background-color: #666;
    z-index: 1;
    line-height: 50px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 5px;

    span {
        font-size: 30px;
        color: #0a0;
    }

    #close {
        position: absolute;
        right: 1rem;
        color: #a00;

        &:hover {
            color: #f00;
        }
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            border: 1px solid #aaa;
            border-radius: 5px;
            margin: 5px 0;
            padding: 5px;
            background-color: #666;
            color: #333;

            &:hover {
                background-color: #aaa;
            }
        }
    }
    
@media (max-width: 425px) {
    line-height: 35px;    
}
`;