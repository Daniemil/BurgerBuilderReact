import React from 'react'
import Classes from './toolbar.module.css'
import Logo from '../Logo/Logo'
import Navitems from './NavItems/Navitems'
import ToggleDrawer from '../UI/Button/ToggleDrawer'

const Toolbar = (props) => {
    return (
        <header className={Classes.Toolbar}>
            <ToggleDrawer clicked={props.clicked} display={props.display}/>
            <Logo height="80%" />
            <nav>
               <Navitems />
            </nav>
        </header>
    )
}

export default Toolbar