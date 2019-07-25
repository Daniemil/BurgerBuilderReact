import React from 'react'
import Classes from './control.module.css'

const Control = (props) => {
    
    return (
        <div className={Classes.BuildControl}>
            <label className={Classes.Label}>{props.label}</label>
            <button className={Classes.More} onClick={props.moreClick}>+</button>
            <button className={Classes.Less} onClick={props.lessClick} 
                disabled={props.disabled}>-</button>
        </div>
    )
}

export default Control

/**
 * <button className={Classes.Less} onClick={ ()=> props.addClick(props.type)}>+</button>
            <button className={Classes.More} onClick={ () => props.minusClick(props.type)}>-</button>
 */