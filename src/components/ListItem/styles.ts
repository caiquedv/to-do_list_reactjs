import styled from "styled-components";

interface ContainerProps {
    done: boolean;
    task: boolean | undefined;
}

export const Container = styled.label(({ done, task }: ContainerProps) => (`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #20212c;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #ccc;
    position: relative;

    .task {
        text-decoration: ${done && !task ? 'line-through' : 'initial'};
        width: 70%;
        font-weight: ${task ? 'bold' : 'normal'};
    }
    
    .remove {
        position: absolute;
        right: 10px;
        color: #444;   
        cursor: pointer;
        
        &:hover {
            color: #666;
        }
    }
`))