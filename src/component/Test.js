/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Test extends Component {
    state = { clicked: false }

    handleClick = () => {
        if (this.state.clicked) {
            this.setState({ clicked: false })
        } else {
            this.setState({ clicked: true })
        }
        console.log(`Clicked: ${this.state.clicked}`)
    }

    render() {
        return (
            <div>
                <a href='#' onClick={this.handleClick}> Click 2 see Paragraph</a>
                <p style={{ display: this.state.clicked? '' : 'none'}}> This is Paragraph</p>
            </div>
        )
    }
}
