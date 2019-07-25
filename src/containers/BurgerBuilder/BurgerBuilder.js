import React from 'react'
import Burger from '../../components/Burger/Burger'
import Controls from '../../components/Burger/Controls/Controls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSum from '../../components/Burger/OrderSum/OrderSum'

const INGREDIENT_PRICES = {
    salad: 0.25,
    cheese: 0.5,
    meat: 1,
    bacon: 0.5
}

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
             salad: 0,
             bacon: 0,
             cheese: 0,
             meat: 0
        },
        purchased: false,
        totalPrice: 3,
        checkout: false
    }

    clickMore = (type) => {
        const newState = {...this.state}
        
        newState.ingredients[type] += 1
        newState.totalPrice += INGREDIENT_PRICES[type]

        
        this.setState(newState)
    }

    clickLess = (type) => {
        const newState = {...this.state}
        if(newState.ingredients[type] > 0)
        {
            newState.ingredients[type] -= 1
            newState.totalPrice -= INGREDIENT_PRICES[type]
        }
        
        this.setState(newState)
    }

    clickCheckout = () => {
        this.setState({
            checkout: !this.state.checkout
        })
    }

    clickCheckoutContinue = () => {
        alert("Checkout Continued")
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        let orderDisabled = true
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
            if(disabledInfo[key] === false)
                orderDisabled = false
        }

        return (
            <>
               
                <Modal display={this.state.checkout} clickDisplay={this.clickCheckout}>
                    <OrderSum ingredients={this.state.ingredients}
                        ingPrices={INGREDIENT_PRICES}
                        totalPrice={this.state.totalPrice}
                        checkoutCancel={this.clickCheckout}
                        checkoutContinue={this.clickCheckoutContinue}/>
                </Modal>
               

                <Burger ingredients={this.state.ingredients}/>
                
                <Controls moreClick={this.clickMore} 
                    lessClick={this.clickLess}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    orderDisabled={orderDisabled}
                    clickCheckout={this.clickCheckout}/>
            </>
        )
    }
}

export default BurgerBuilder