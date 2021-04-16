/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Test extends Component {
    state = { clicked: false }

    /*handleClick = () => {
         this.setState({ clicked: !this.state.clicked })
         console.log(`Clicked: ${this.state.clicked}`)
     }*/


    render() {
        return (
            <div>
                <a href='#' onClick={() => this.setState({ clicked: !this.state.clicked })}> Click to see Paragraph</a>
                <p style={{ display: this.state.clicked ? '' : 'none' }}> This is Paragraph</p>
            </div>
        )
    }
}
