import React, {useState, setState} from 'react';

function Login() {
  // State:
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // HTML Return
  return (
    <div className = "form">
      <ul className = "tab-group">
        <li className = "tab active"><a href = "#signup">Sign Up</a></li>
        <li className = "tab"><a href = "#login">Sign Up</a></li>
      </ul>

      <div className = "tab-content">
        <div className = "signup">
          <h1>Sign Up For Free</h1>
          <form action="/" method="post">
            <div className = "top-row">

              <div className = "field-wrap">
                <label for = "firstName">
                  First Name <span className = "req">*</span>
                </label>
                <input type = "text"/>
              </div>

              <div className = "field-wrap">
                <label for = "lastName">
                  Last Name <span className = "req">*</span>
                </label>
                <input type = "text"/>
              </div>
            </div>

            <div className = "field-wrap">
              <label for = "emailAddress">
                Email Address <span className = "req">*</span>
              </label>
              <input type = "text"/>
            </div>

            <div className = "field-wrap">
              <label for = "password">
                Set a Password <span className = "req">*</span>
              </label>
              <input type = "text"/>
            </div>
            <button type = "submit" className = "button button-block">Get Started</button>
          </form>
        </div>

        <div className = "login">
          <h1>Welcome Back!</h1>
          <form action = "/" method = "post">

            <div className = "field-wrap">
              <label for = "emailAddress">
                Email Address <span className = "req">*</span>
              </label>
              <input type = "email"/>
            </div>

            <div className = "field-wrap">
              <label for = "password">
                Password <span className = "req">*</span>
              </label>
              <input type = "password"/>
            </div>

            <p className = "forgot"><a href = "#"></a></p>
            <button className = "button button-block">Log In</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login

// current resources:
//https://www.section.io/engineering-education/registration-form-react.js-firebase/
//https://codepen.io/ehermanson/pen/KwKWEv
//https://reactjs.org/docs/forms.html