import styled from 'styled-components';

export const Container = styled.div`
    background-color: #17181f;
    color: #797a81;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
    position: relative;

    span {
        color: #444;
        cursor: pointer;

        &:hover {
            color: #666;
        }
    }

    .help {
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
    }

@media (max-width: 425px) {
    .help {
        line-height: 45px;
    }
}
@media (max-width: 360px) {
    .help {
        line-height: 35px;
    }
}
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;
