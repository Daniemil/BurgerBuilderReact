import React from 'react'
import Classes from './burger-ingredient.module.css'
import PropTypes from 'prop-types'

const BurgerIngredient = (props) => {
    let ingredient = null

    switch(props.name){
        case ("bottomBun"): 
            ingredient = <div className={Classes.BreadBottom}></div>
            break
        case ("topBun"): 
            ingredient = (<div className={Classes.BreadTop}>
                            <div className={Classes.Seeds1}></div>
                            <div className={Classes.Seeds2}></div>
                          </div>)
            break
        case ("meat"): 
            ingredient = <div className={Classes.Meat}></div>
            break
        case ("cheese"):
            ingredient = <div className={Classes.Cheese}></div>
            break
        case ("salad"):
            ingredient = <div className={Classes.Salad}></div>
            break
        case ("bacon"):
            ingredient = <div className={Classes.Bacon}></div>
            break
        default: ingredient = null
    }
    return (
        <>
            {ingredient}
        </>
    )
}

BurgerIngredient.propTypes = {
    name: PropTypes.string.isRequired
}

export default BurgerIngredient