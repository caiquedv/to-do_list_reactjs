import * as C from './styles';
import { Item } from '../../types/Item';
import { useEffect, useRef, useState } from 'react';

interface Props {
	item: [
		item: Item,
		index: number
	];
	onCheck: (id: number, checked: boolean) => void;
	remove: (id: number) => void;
	onDrag: (dragItem: number) => void;
	onTarget: (target: number) => void;
}

export const ListItem = ({ item, onCheck, remove, onDrag, onTarget }: Props) => {
	const task = item[0];
	let checked: boolean;

	const [isChecked, setIsChecked] = useState(task.done);

	const checkedStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
		checked = e.target.checked;

		setIsChecked(checked);
		onCheck(task.id, checked);
	};

	// Drag and Drop Data <-- //////////////////////////////////////////

	const index = item[1];

	const dragItem = useRef<any>(null);

	const setDraggedIndex = () => {
		onDrag(dragItem.current);
	};

	const setTargetIndex = () => {
		onTarget(index);
	};

	useEffect(() => { // altera o status da task quando arrasta e solta
		setIsChecked(task.done);
	}, [task.done]);

	return (
		<C.Container
			done={isChecked}
			draggable
			onDragStart={() => (dragItem.current = index)}
			onDrop={setTargetIndex}
			onDragEnd={setDraggedIndex}
			onDragOver={e => e.preventDefault()}
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