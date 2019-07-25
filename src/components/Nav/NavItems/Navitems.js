import React from 'react'
import Classes from './navitems.module.css'

import Navitem from './Navitem'
const Navitems = (props) => (
    <ul className={Classes.Navitems}>
        <Navitem link="/" active>Burger Builder</Navitem>
        <Navitem link="/">Checkout</Navitem>
    </ul>
)

export default Navitems