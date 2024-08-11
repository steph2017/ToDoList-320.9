import React from 'react';
import Button from './Button';

function ActionButton({
    children,
    className,
    dispatch,
    type,
    payload
}) {
    return (
        <Button
            onClick={() => dispatch({ type: type, payload: payload })}
            className={className}
        >
            {children}
        </Button>
    )
}

export default ActionButton