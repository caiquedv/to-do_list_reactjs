import { useEffect, useState } from "react";
import * as C from './App.styles';
import { AddArea } from "./components/AddArea/AddArea";
import { ListItem } from "./components/ListItem/ListItem";
import { Item } from "./types/Item";

const App = () => {
	const [list, setList] = useState<Item[]>([
		{ id: 1, name: 'Comprar o pão na padaria', done: false },
		{ id: 2, name: 'Comprar um bolo na padaria', done: true },
	]);

	let newList = [...list];

	const handleAddTask = (taskName: string) => {
		newList.push({
			id: list.length + 1,
			name: taskName,
			done: false
		});

		setList(newList);
	};

	const handleDoneStatus = (id: number, checked: boolean) => {
		newList.map((item, index) => {
			if (item.id === id) {
				newList[index].done = checked;
			}
		});

		setList(newList);
	};

	const removeTask = (id: number) => {
		setList(newList.filter(item => item.id !== id));
	};

	// Drag and Drop Data <--/////////////////////////////////////////////////////

	const [targetIndex, setTargetIndex] = useState<any>(null);

	const getTargetIndex = (target: number) => {
		setTargetIndex(target);
	};

	const handleSort = (dragItem: number) => {
		if (targetIndex !== null) {
			const draggedItemContent = newList.splice(dragItem, 1)[0];

			newList.splice(targetIndex, 0, draggedItemContent);
			setList(newList)
		}

		setTargetIndex(null);
	};

	// useEffect(()=>{ // Ver Lista quando for atualizada
	// 	console.log(newList)
	// },[list]); 

	return (
		<C.Container>
			<C.Area>
				<C.Header>Lista de Tarefas</C.Header>

				<form onSubmit={e => e.preventDefault()}>
					<AddArea onEnter={handleAddTask} />

					{list.map((item, index) =>
						<ListItem
							key={index}
							item={[item, index]}
							onCheck={handleDoneStatus}
							remove={removeTask}
							onDrag={handleSort}
							onTarget={getTargetIndex}
						/>
					)}
				</form>
			</C.Area>
		</C.Container>
	);
};

export default App;