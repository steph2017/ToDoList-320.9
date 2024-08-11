import React from 'react';
import { useState } from 'react';
import ActionButton from './ActionButton';
import EditTextInput from './EditTextInput';

function ToDoItem({ todos, dispatch }) {
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <input
                type="checkbox"
                id="taskDone"
            />
            <label htmlFor="taskDone" className="todoName">{todos.name}</label>
            <ActionButton
                className="edit_task"
                dispatch={dispatch}
                type="edit_task"
                payload={{ task: item.name, editMode }}
            >
                Edit
            </ActionButton>
            <ActionButton
                className="delete_task"
                dispatch={dispatch}
                type="delete_task"
                payload={{ task: item.name }}
            >
                Delete
            </ActionButton>
            <AddTextInput state={editMode} setState={setEditMode} />
            <ActionButton
                className="save_task"
                dispatch={dispatch}
                type="save_task"
                payload={{ task: item.name }}
            >
                Delete
            </ActionButton>
        </div>
    )
}

export default ToDoItem