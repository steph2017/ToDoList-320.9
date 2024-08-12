import React from 'react'

function reducer(state, { type, payload: { id, editText, newName } }) {
    switch (type) {
        case "add_task": {
            if (!newName) {
                return state;
            }
            return [{ id: state.length + 1, title: newName, completed: false }, ...state];

        }
        case "save_task": {
            return state.map(s =>
                s.id === id ? { ...s, title: editText } : s
            );
        }
        case "delete_task": {
            return state.filter((s) => s.id !== id);
        }
        case "toggle_task": {
            return state.map(s =>
                s.id === id ? { ...s, completed: !s.completed } : s
            );
        }
        case "start_edit": {
            // Starting edit mode is managed by component 
            return state;
        }
        case "cancel_edit": {
            // Canceling edit mode is managed at component level
            return state;
        }
        default: {
            throw Error("Unknown Action: " + type);
        }
    }
}

export default reducer