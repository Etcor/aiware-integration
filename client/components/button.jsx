import React from 'react'

function Button ({onClick, className, text}) {
    return (
        <div
            onClick={onClick}
            className={className}>
            <p>{text}</p>
        </div>
    )
}

export default Button
