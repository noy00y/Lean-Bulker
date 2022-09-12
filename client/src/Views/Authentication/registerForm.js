import React, { Component, useState, setState } from 'react'
import './Form.css'

// // State:
// const [firstName, setFirstName] = useState(null);
// const [lastName, setLastName] = useState(null);
// const [email, setEmail] = useState(null);
// const [password, setPassword] = useState(null);

// // Input Handling:
// const handleChange = (e) => {
//   const {id, value} = e.target;
//   if (id === "firstName") {
//     setFirstName(value);
//   }
//   if (id === "lastName") {
//     setLastName(value);
//   }
//   if (id === "email") {
//     setEmail(value);
//   }
//   if (id === "password") {
//     setPassword(value);
//   }
// }

// // Input Submitting:
// const inputSubmit = () => {

// }

export default class registerForm extends Component {
  render() {
    return (
      <div className='signUpContainer'>
        <h4 className='headerText'>Join Us Today</h4>
        <div className='inputSectionSplit'>
          <input type='text' className='firstName' required/>
          <label className='inputLabel'>First Name</label>
        </div>
        <div className='inputSectionSplit'>
          <input type='text' className='lastName' required/>
          <label className='inputLabel'>Last Name</label>
        </div>
        <div className='inputSection'>
          <input type='text' className='emailAddress' required/>
          <label className='inputLabel'>Email Address</label>
        </div>
        <div className='inputSection'>
          <input type='password' className='password' required/>
          <label className='inputLabel'>Password</label>
        </div>
      </div>
    )
  }
}
