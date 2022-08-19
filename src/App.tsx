import { useRef, useState } from "react";
import * as C from './App.styles';
import { AddArea } from "./components/AddArea/AddArea";
import { Item } from "./types/Item";

const App = () => {
	const [list, setList] = useState<Item[]>([
		{ id: 1, name: 'Comprar o pão na padaria', done: false },
		{ id: 2, name: 'Comprar um bolo na padaria', done: true },
	]);

	let newList: Item[];

	const handleAddTask = (taskName: string) => {
		newList = [...list];

		newList.push({
			id: list.length + 1,
			name: taskName,
			done: false
		});

		setList(newList);
	};

	const handleDoneStatus = (id: number, checked: boolean) => {
		newList = [...list];

		newList[id - 1].done = checked;
		setList(newList); //console.log(newList)
	};

	const removeTask = (id: number) => {
		newList = [...list].filter(item => item.id !== id);

		setList(newList);
	};

	// Drag and Drop Data <---///////////////////////////////////////////////////////////////////////////

	const dragItem = useRef<any>(null);
	const dragOverItem = useRef<any>(null);

	const handleSort = () => {
		let orderList = [...list];

		const draggedItemContent = orderList.splice(dragItem.current, 1)[0];

		orderList.splice(dragOverItem.current, 0, draggedItemContent);

		dragItem.current = null;
		dragOverItem.current = null;

		setList(orderList);
	};


	return (
		<C.Container>
			<C.Area>
				<C.Header>Lista de Tarefas</C.Header>

				<form onSubmit={e => e.preventDefault()}>
					<AddArea onEnter={handleAddTask} />

					{list.map((item, index) =>
						<C.ContLabel key={index}
							done={item.done}
							draggable
							onDragStart={(e) => (dragItem.current = index)}
							onDragEnter={(e) => (dragOverItem.current = index)}
							onDragEnd={handleSort}
						>
							<input
								type="checkbox"
								checked={item.done}
								onChange={(e) => handleDoneStatus(item.id, e.target.checked)}
							/>
							<span className='task'>{item.name}</span>
							<input className='removeBox'
								type="checkbox"
								onChange={() => removeTask(item.id)}
							/>
							<span className='remove'>Remover</span>
						</C.ContLabel>
					)}
				</form>
			</C.Area>
		</C.Container>
	);
};

export default App;