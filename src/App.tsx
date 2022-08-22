import { useEffect, useState } from "react";
import * as C from './App.styles';
import { AddArea } from "./components/AddArea/AddArea";
import { HelpModal } from "./components/HelpModal/HelpModal";
import { ListItem } from "./components/ListItem/ListItem";
import { Item } from "./types/Item";

const App = () => {
	if (!localStorage.todolist) localStorage.setItem('todolist', '[]');
	const storagedList: any = localStorage.getItem('todolist');
	const parsedList = JSON.parse(storagedList);

	const [list, setList] = useState<Item[]>(parsedList[0] ? parsedList : [
		{ id: 1, name: 'Compras', text: true },
		{ id: 2, name: 'Frango com abóbora', done: false },
		{ id: 3, name: 'Pão com mortadela', done: true }
	]);

	let newList = [...list];

	const updateList = (arr: Item[]) => {
		setList(arr);
		localStorage.setItem("todolist", JSON.stringify(arr));
	};

	const handleAddTask = (taskName: string, taskOrText: boolean) => {
		if (!taskOrText) {
			newList.push({
				id: list.length + 1,
				name: taskName,
				done: false,
			});
		} else {
			newList.push({
				id: list.length + 1,
				name: taskName,
				text: taskOrText
			});
		}
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

	const [helpModal, setHelpModal] = useState<boolean>(false);

	// useEffect(()=>{ // Ver Lista quando for atualizada
	// 	console.log(newList)
	// },[list]); 

	return (
		<C.Container>
			<C.Area>
				<span onClick={() => setHelpModal(!helpModal)}>Ajuda</span>

				{helpModal &&
					<HelpModal close={() => setHelpModal(!helpModal)} />
				}

				<section>
					<form onSubmit={e => e.preventDefault()}>
						<AddArea
							onEnter={handleAddTask}
							remove={updateList}
						/>

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
				</section>
			</C.Area>
		</C.Container>
	);
};

export default App;