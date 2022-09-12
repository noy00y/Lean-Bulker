// Imports
import React, { Component, useState, setState } from 'react';
import './LoginForm.scss';


// Function:
export default class Authentication extends Component {
  // Constructor
  constructor(props) {
    super(props)
    this.state = {
      newUser: true,
      right: 0,
    }
  }

  // Handling Registration or Login:
  handleClick(button) {
    // Registration
    if (this.state.newUser && button != 'signUp') {
      this.setState({newUser: true})

    // Login
    } else if (!this.state.newUser && button != 'logIn') {
      this.setState({newUser: false})
    }
  }

  render() {
    return (
      <div className = "form">
        
        {/* Register or Login Header */}
        <ul className = "tab-group">
          <li className = {this.state.newUser ? 'headerActive' : 'headerInActive'}
            onClick = {() => this.handleClick('signUp')}>
            <button className = "tab active">Sign Up</button>
          </li>
          <li className = {this.state.newUser ? 'headerInActive' : 'headerActive'}
            onClick = {() => this.handleClick('logIn')}>
            <button className = "tab">Log In</button>
          </li>
        </ul>

      </div>
    )
  }
}
