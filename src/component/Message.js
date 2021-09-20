/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Message extends Component {
    state = {clicked: false}
    render() {
        return (
            <React.Fragment>
          <a href="#" onClick={() => this.setState({clicked: !this.state.clicked})}>Want to buy a new car?</a>
          <p style={{display: this.state.clicked ? '' : 'none'}}>Call +11 22 33 44 now!</p>

          
        </React.Fragment>
        )
    }
}
