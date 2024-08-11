import { useReducer, useState } from 'react';
import ActionButton from './components/ActionButton';
import AddTextInput from './components/AddTextInput';
import ToDoItem from './components/ToDoItem';
import initialState from './assets/seeddata.js';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <AddTextInput />
        <ActionButton

        >
          Add a Task
        </ActionButton>
      </div>
      <div>

      </div>
    </>
  )
}



export default App
