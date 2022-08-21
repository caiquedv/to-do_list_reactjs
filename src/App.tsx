import { useEffect, useState } from "react";
import * as C from './App.styles';
import { AddArea } from "./components/AddArea/AddArea";
import { ListItem } from "./components/ListItem/ListItem";
import { Item } from "./types/Item";

const App = () => {
	const storagedList: any = localStorage.getItem('list');

	const [list, setList] = useState<Item[]>(
		JSON.parse(storagedList)
	);

	let newList = [...list];

	const updateList = (arr: Item[]) => {
		setList(arr);
		localStorage.setItem("list", JSON.stringify(arr));
	};

	const handleAddTask = (taskName: string) => {
		newList.push({
			id: list.length + 1,
			name: taskName,
			done: false
		});

		updateList(newList);
	};

	const handleDoneStatus = (id: number, checked: boolean) => {
		newList.map((item, index) => {
			if (item.id === id) {
				newList[index].done = checked;
			}
		});

		updateList(newList);
	};

	const removeTask = (id: number) => {
		newList = newList.filter(item => item.id !== id);
		updateList(newList);
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

			updateList(newList);
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