import styled from "styled-components";

interface ContainerProps {
    done: boolean;
}

export const Container = styled.label(({ done }: ContainerProps) => (`
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