import React from 'react'

const Input = props => {
    return (
        <input
            type={props.type}
            name={props.name}
            onChange={props.changed}
            onBlur={props.blurred && props.blurred}
            onFocus={props.focused && props.focused}
            value={props.value}
            className={props.className}
            placeholder={props.placeholder} />
    )
}

export default Input;