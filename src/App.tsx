import { useState } from "react";
import * as C from './App.styles';
import { AddArea } from "./components/AddArea/AddArea";
import { ListItem } from "./components/ListItem/ListItem";
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
    setList(newList);
  };

  const removeTask = (id: number) => {
    newList = [...list].filter(item => item.id !== id);

    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <form onSubmit={e => e.preventDefault()}>
          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) =>
            <ListItem
              key={index}
              item={item}
              onCheck={handleDoneStatus}
              remove={removeTask}
            />
          )}
        </form>
      </C.Area>
    </C.Container>
  );
};

export default App;