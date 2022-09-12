// Imports
import React, { Component, useState, setState } from 'react';
import loginForm from './LoginForm';
import registerForm from './registerForm';
import './Form.css';


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

  // Setting State
  handleClick(button) {
    if(this.state.newUser && button != 'signUp') {
      this.setState({newUser: false})
    } else if(!this.state.newUser && button != 'signIn') {
      this.setState({newUser: true})
    }
  }
  
  // Body
  render() {
    return(
      <div className='formContainer'>
        <div className='formHeader'>
          {/* Header */}
          <div 
            className={ this.state.newUser ? 'headerActive' : 'headerInActive' } 
            onClick={() => this.handleClick('signUp')}>
            <button className='headerButton'> Sign Up </button>
          </div>
          <div 
            className={ this.state.newUser ? 'headerInActive' : 'headerActive' } 
            onClick={() => this.handleClick('signIn')}>
            <button className='headerButton'> Log In </button>
          </div>
        </div>

        {/* Form Type */}
        <div className='formBody'>
          {
            this.state.newUser ? <registerForm />: <loginForm />
          }
        </div>
        <div className='formFooter'>
          <button className='saveForm'> { this.state.newUser ? 'Submit' : 'Login'} </button>
        </div>
      </div>
    ) 
  }
}
