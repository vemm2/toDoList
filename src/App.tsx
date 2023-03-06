import React, { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Comprar bolo", done: true },
  ]);

  const handleChangeListStatus = (done : boolean, id : number)=>{
    let changeList = [...list]
    changeList[id-1]['done'] = done;
    setList(changeList)
  }

  const handleAddTask = (taskName: string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Adicionar nova tarefa */}
        <AddArea handleAddTask = {handleAddTask} />
        {list.map((item, index) => {
          return  <ListItem handleChangeListStatus={handleChangeListStatus} key ={index} item={item}/>;
        })}
      </C.Area>
    </C.Container>
  );
};
export default App;
