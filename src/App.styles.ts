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
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;

interface ContainerProps {
    done: boolean;
}

export const ContLabel = styled.label(({ done }: ContainerProps) => (`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #20212c;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #ccc;
    position: relative;

    span:not(.remove) {
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    .task {
        width: 70%
    }
    
    .removeBox {
        z-index: 1;
        width: 70px;
        height: 100%;
        position: absolute;
        right: 10px;
        appearance: none;
        cursor: pointer;
        // background: red;

        &:hover + .remove {
            color: #666;            
        }
    }

    .remove {
        position: absolute;
        right: 10px;
        color: #444;        
    }
`))