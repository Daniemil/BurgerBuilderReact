import React from 'react'
import Classes from './toggledrawer.module.css'

const ToggleDrawer = (props) => {
    const container = props.display ? Classes.change : Classes.ToggleDrawer

    return (
        <div className={container} onClick={props.clicked}>
            <div className={Classes.bar1}></div>
            <div className={Classes.bar2}></div>
            <div className={Classes.bar3}></div>
      </div> 
    )
}

export default ToggleDrawer