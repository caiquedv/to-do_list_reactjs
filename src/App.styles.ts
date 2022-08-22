import styled from 'styled-components';

export const Container = styled.div`
    color: #797a81;
    min-height: 60vh;
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
`;