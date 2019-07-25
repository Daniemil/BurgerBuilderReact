import React from 'react'
import Logo from '../../Logo/Logo'
import Navitems from '../NavItems/Navitems'
import Classes from './sidedrawer.module.css'
import BackdropClass from '../../UI/Backdrop/backdrop.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'



const Sidedrawer = (props) => {

    let classesArr = [Classes.Sidedrawer, Classes.Close]
    if(props.display){
        classesArr = [Classes.Sidedrawer, Classes.Open]
    }

    return (
        <>
            <Backdrop display={props.display} clickDisplay={props.clicked} 
                cssClass={BackdropClass.BackdropSmall}/>
            
            <div className={classesArr.join(" ")}>
                <Logo height="11%"/>
                <nav>
                    <Navitems />
                </nav>
            </div>
        </>
    )
}

export default Sidedrawer