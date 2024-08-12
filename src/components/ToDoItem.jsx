import React from 'react';
import { useState } from 'react';
import ActionButton from './ActionButton';
import EditTextInput from './EditTextInput';

function ToDoItem({ todo, dispatch }) {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        dispatch({
            type: 'save_task',
            payload: { id: todo.id, editText }
        });
        setEditMode(false);
    };

    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleCheckbox = () => {
        dispatch({
            type: 'toggle_task',
            payload: { id: todo.id }
        });
    };

    if (editMode) {
        return (
            <div>
                <EditTextInput value={editText} onChange={(e) => setEditText(e.target.value)} />
                <ActionButton
                    className="save_task"
                    dispatch={dispatch}
                    type="save_task"
                    payload={{ id: todo.id, editText: editText }}
                    onClick={handleSaveClick}
                >
                    Save
                </ActionButton>
                <ActionButton
                    className="cancel_task"
                    dispatch={dispatch}
                    type="cancel_edit"
                    onClick={handleCancelClick}
                >
                    Cancel
                </ActionButton>
            </div>
        );
    } else {
        return (
            <div>
                <input
                    type="checkbox"
                    id={`taskDone-${todo.id}`}
                    checked={todo.completed}
                    onChange={handleCheckbox} />
                <label htmlFor={`taskDone-${todo.id}`} className="todoName">{todo.title}</label>
                <ActionButton
                    className="edit_task"
                    dispatch={dispatch}
                    type="start_edit"
                    payload={{ id: todo.id }}
                    onClick={handleEditClick}
                >
                    Edit
                </ActionButton>
                <ActionButton
                    className="delete_task"
                    dispatch={dispatch}
                    type="delete_task"
                    payload={{ id: todo.id }}
                >
                    Delete
                </ActionButton>
            </div>)
    }
}

export default ToDoItem