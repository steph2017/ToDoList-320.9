import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';
import AddTextInput from './components/AddTextInput';
import ToDoItem from './components/ToDoItem';
import initialState from './assets/seeddata.js';
import reducer from './assets/reducer.js';

import './App.css'

function App() {
  const [taskName, setTaskName] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialState);
  const todoList = todos.map(item => {
    return (
      <ToDoItem
        key={item.id}
        todo={item}
        dispatch={dispatch}
      />
    );
  });

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch({
        type: "add_task",
        payload: { newName: taskName }
      });
      setTaskName("");
    }
  };

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <AddTextInput state={taskName} setState={setTaskName} />
        <ActionButton
          type="add_task"
          className="add_task"
          payload={{ newName: taskName }}
          dispatch={dispatch}
          onClick={handleAddTask}
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
