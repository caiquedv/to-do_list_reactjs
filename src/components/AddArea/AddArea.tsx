import { useState, KeyboardEvent } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

interface Props {
	onEnter: (taskName: string, taskOrText: boolean) => void;
	remove: (arr: Item[]) => void;
}

export const AddArea = ({ onEnter, remove }: Props) => {
	const [inputText, setInputText] = useState<string>('');
	const [textOrTask, setTextOrTask] = useState<boolean>(false);

	const handeKeyUp = (e: KeyboardEvent) => {
		if (inputText && e.code === 'Enter' || e.code === 'NumpadEnter') {
			onEnter(inputText, textOrTask);
			setInputText('');
		}
	};

	const handleClick = () => {
		if (inputText) {
			onEnter(inputText, textOrTask);
			setInputText('');
		}
	};

	const removeAll = () => {
		let confirmRemove = confirm('Deseja apagar todos os itens?');
		if (confirmRemove) remove([]);
	};

	return (
		<C.Container>
			<div className='inputContainer'>
				<div onClick={handleClick} className="image">+</div>
				<input
					type="text"
					placeholder={textOrTask ? 'Adicione um texto' : 'Adicione uma tarefa'}
					value={inputText}
					onChange={e => setInputText(e.target.value)}
					onKeyUp={handeKeyUp}
				/>
				<span onClick={() => setTextOrTask(!textOrTask)}>
					{textOrTask ? '🇹' : '✔️'}
				</span>
			</div>
			<span onClick={removeAll}>Apagar tudo</span>
		</C.Container>
	);
}