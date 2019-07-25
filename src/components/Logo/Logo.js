import React from 'react'
import LogoImg from '../../assets/images/burger-logo.png'
import Classes from './logo.module.css'

const Logo = (props) => (
    <div className={Classes.Logo} style={ {height: props.height} }>
        <img src={LogoImg} alt="Burger" />
    </div>
    
)


export default Logo