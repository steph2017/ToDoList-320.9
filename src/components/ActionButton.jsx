import React from 'react';
import Button from './Button';

function ActionButton({
    children,
    className,
    dispatch,
    type,
    payload,
    onClick
}) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            dispatch({ type, payload });
        }
    };
    return (
        <Button
            onClick={handleClick}
            className={className}
        >
            {children}
        </Button>
    )
}

export default ActionButton