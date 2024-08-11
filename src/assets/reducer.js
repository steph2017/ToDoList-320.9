import React from 'react'

function reducer(state, { type, payload: { task } }) {
    switch (type) {
        case "add_task": {
            if (task === "") {
                return state;
            }
            return [{ name: task, completed: false }, ...state];

        }
        case "edit_task": {
            return state.map((s) =>
                s.name === task
                    ? { ...s, editMode: true }
                    : s
            );
        }
        case "save_task": {
            return state.map((s) =>
                s.editMode
                    ? { ...s, name: newTaskName, editMode: false }
                    : s
            );
        }
        case "delete_task": {
            return state.filter((s) => s.name !== task);
        }
        default: {
            throw Error("Unknown Action: " + type);
        }
    }
}

export default reducer