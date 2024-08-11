import React from 'react'

function Reducer(state, { type, payload: { task, editMode } }) {
    return (
        switch (type) {
        case "add_task": {
            if (task === "") {
                return state;
            }
            return [{ name: task, completed: false }, ...state];

        }
        case "edit_task": {
            return
        }
        case "save_task": {
            return
        }
        case "delete_task": {
            return state.filter((s) => s.name !== task);
        }
        default: {
            // throw Error("Unknown Action: " + type);
        }
    }
    )
}

export default Reducer