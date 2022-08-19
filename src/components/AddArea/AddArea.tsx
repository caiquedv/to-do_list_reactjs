import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

interface Props {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handeKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
            
        }
    };

    return (
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handeKeyUp}
            />
        </C.Container>
    );
}