import React from 'react'
import Classes from './modal.module.css'
import BackdropClass from '../Backdrop/backdrop.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {

    return (
        <>
            <Backdrop display={props.display} clickDisplay={props.clickDisplay} 
                cssClass={BackdropClass.Backdrop}/>
            <div className={Classes.Modal}
                style={ {
                    transform: props.display ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.display ? '1' : '0'
                }}>
                {props.children}
            </div>
        </>
    )
}

export default Modal