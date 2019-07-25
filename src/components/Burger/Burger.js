import React from 'react'
import Classes from './burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) => {
    
    let ingredientsArr = Object.keys(props.ingredients)
        .map(ingName => {
            return [...Array(props.ingredients[ingName])].map( (_,i) => {
               return <BurgerIngredient key={ingName + i} name={ingName} />
            })
        }).reduce( (arr, el) => {
            return arr.concat(el)
        }, [])

    if(ingredientsArr.length === 0){
        ingredientsArr = <p>add stuff</p>
        console.log(ingredientsArr)
    }
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient name="topBun" />
            {ingredientsArr}
            <BurgerIngredient name="bottomBun" />
        </div>
    )
}

export default Burger

/**
 * .Burger {
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
}

@media (min-width: 500px) and (min-height: 400px){
    .Burger {
        width: 350px;
        height: 300px;
    }
}

@media (min-width: 500px) and (min-height: 401px){
    .Burger {
        width: 450px;
        height: 400px;
    }
}

@media (min-width: 1000px) and (min-height: 700px){
    .Burger {
        width: 700px;
        height: 600px;
    }
}
 */