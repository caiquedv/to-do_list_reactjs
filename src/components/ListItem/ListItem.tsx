import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

interface Props {
    item: Item
    onCheck: (id: number, checked: boolean) => void;
    remove: (id: number) => void;
}

export const ListItem = ({ item, onCheck, remove }: Props) => {
    const task = item;
    let checked: boolean;

    const [isChecked, setIsChecked] = useState(task.done);

    const checkedStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        checked = e.target.checked;
        
        setIsChecked(checked);
        onCheck(task.id, checked)
    };

    return (
        <C.Container
            done={isChecked}
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={checkedStatus}
            />
            <span className='task'>{task.name}</span>
            <input className='removeBox'
                type="checkbox"
                onChange={() => remove(task.id)}
            />
            <span className='remove'>Remover</span>
        </C.Container>
    );
}