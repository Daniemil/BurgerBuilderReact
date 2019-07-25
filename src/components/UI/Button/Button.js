import React from 'react'
import Classes from './button.module.css'
const Button = (props) => (
    <button
        className={[Classes.Button, Classes[props.type]].join(' ')}
        onClick={props.clicked}
        >{props.children}</button>
)

export default Button