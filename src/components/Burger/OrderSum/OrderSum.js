import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSum = (props) => {

    let showTotalPrice = false
    const ingArr = Object.keys(props.ingredients)
        .map(key => {
            if(props.ingredients[key] > 0){
                showTotalPrice = true
                return (<li key={key}>
                    <span style={ {textTransform: "capitalize"}}>{key}</span> x 
                        {props.ingredients[key]}  {" - "} 
                        <span style={ {textAlign: "right"}}>${props.ingredients[key] * props.ingPrices[key]}</span>
                </li>)
            }
            else {
                return null
            }
        })

    return (
        <div>
            <h1>Order Summary</h1>
            <ul>{ingArr}</ul>
            {showTotalPrice ? <p>Total: ${props.totalPrice.toFixed(2)}</p> : null}
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={props.checkoutCancel}>Cancel</Button>
            <Button type="Success" clicked={props.checkoutContinue}>Continue</Button>
        </div>
    )
}

export default OrderSum