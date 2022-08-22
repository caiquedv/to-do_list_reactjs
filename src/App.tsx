import { useEffect, useState } from "react";
import * as C from './App.styles';
import { AddArea } from "./components/AddArea/AddArea";
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
				<C.Header>Lista de Tarefas</C.Header>
				<span onClick={()=> setHelpModal(!helpModal)}>Ajuda</span>

				{helpModal &&
					<div className="help">
						<span onClick={() => setHelpModal(!helpModal)} id="close">X</span>
						<ul>
							<li>
								Clique em ✔️ ou 🇹 para alternar entre tarefa e texto simples.
							</li>
							<li>
								Clique em <span>+</span> ou tecle enter para adicionar o evento.
							</li>
							<li>
								Você pode mover os itens com o mouse para organizar.
							</li>
							<li>
								Você pode fechar o site e seu trabalho continuará aqui. 
							</li>
						</ul>
					</div>
				}

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
			</C.Area>
		</C.Container>
	);
};

export default App;