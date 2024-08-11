import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';
import AddTextInput from './components/AddTextInput';
import ToDoItem from './components/ToDoItem';
import initialState from './assets/seeddata.js';
import reducer from './assets/reducer.js';

import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialState);
  const todoList = todos.map(item => {
    return (
      <ToDoItem
        key={item.name}
        todo={item}
        dispatch={dispatch}
      />
    );
  });

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <AddTextInput state={task} setState={setTask} />
        <ActionButton
          type="add_task"
          className="add_task"
          payload={{ task }}
          dispatch={dispatch}
        >
          Add a Task
        </ActionButton>
      </div>
      <div>
        {todoList}
      </div>
    </>
  )
}



export default App
