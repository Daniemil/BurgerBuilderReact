import React from 'react'
import Classes from './controls.module.css'
import Control from './Control'


const Controls = (props) => {
    const controls = [
        {label: "Meat", type: "meat"},
        {label: "Cheese", type: "cheese"},
        {label: "Salad", type: "salad"},
        {label: "Bacon", type: "bacon"},
    ]

    //loop through disabled if any are false orderdisabled is false
    //every time + - clicked needs to recheck 
 

    return (
        <div className={Classes.BuildControls}>
            <p>Total Price: ${props.price.toFixed(2)}</p>
            {controls.map( ctrl => (
                <Control key={ctrl.label} label={ctrl.label} 
                    moreClick={ () => props.moreClick(ctrl.type)}
                    lessClick={ () => props.lessClick(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    />
            )
            )}
            <button className={Classes.OrderButton} 
                disabled={props.orderDisabled} onClick={props.clickCheckout}>ORDER NOW</button>
        </div>
    )
}

export default Controls