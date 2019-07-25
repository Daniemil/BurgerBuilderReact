import React from 'react'
import Classes from './navitem.module.css'

const Navitem = (props) => (
    <li className={Classes.Navitem}>
        <a href={props.link} className={props.active ? Classes.active : null}>
            {props.children}
        </a>
    </li>
)

export default Navitem