import React from 'react'

function AddTextInput({ state, setState }) {
    return (
        <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default AddTextInput