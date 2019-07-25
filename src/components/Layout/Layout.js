import React from 'react'
import Classes from './layout.module.css'
import Toolbar from '../Nav/Toolbar'
import Sidedrawer from '../Nav/Sidedrawer/Sidedrawer'

class Layout extends React.Component {
    state = {
        toggleSidedrawer: false
    }

    clickSidedrawer = () => {
        this.setState( prevState => {
            return {toggleSidedrawer: !prevState.toggleSidedrawer}
        })
    }

    render(){
        return (
            <>
                <Toolbar clicked={this.clickSidedrawer} display={this.state.toggleSidedrawer}/>
                <Sidedrawer display={this.state.toggleSidedrawer}
                    clicked={this.clickSidedrawer}/>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
    
}

export default Layout