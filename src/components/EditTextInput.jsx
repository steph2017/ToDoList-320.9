import React from 'react'

function EditTextInput({ value, onChange }) {
    return (
        <input
            type="text"
            value={value || ""}
            onChange={onChange}
        />
    )
}

export default EditTextInput