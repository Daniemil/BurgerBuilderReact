import React from 'react'

const Backdrop = (props) => (
    props.display ? <div className={props.cssClass} onClick={props.clickDisplay}></div> : null
)

export default Backdrop