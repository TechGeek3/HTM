import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: ""
    };
  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused
    });
  }
  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value
    });
  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;

    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }

    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">

          <input
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            autocomplete="off"
          />
          <label className="fluid-input-label" forHtml={id}>{label}</label>

        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div className={`button ${this.props.buttonClass}`} onClick={this.props.onClick}>
        {this.props.buttonText}
      </div>
    );
  }
}

class Login extends React.Component {
  render() {

    const style = {
      margin: "15px 0"
    };
    return (
      <div className="login-container">
        <div className="title">
          Login
        </div>
        <FluidInput type="text" label="name" id="name" style={style} />
        <FluidInput type="text" label="password" id="password" style={style} />
        <Button buttonText="submit" buttonClass="submit-button" ><Link to="/">Submit</Link></Button>
      </div>
    );
  }
}

// function Log() {

//   const [phoneNumber, setPhoneNumber] = useState(0);
//   const [code, setCode] = useState(0);

//   const generateOTP = () => {
//     const auth = getAuth();
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       'size': 'normal',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // ...
//       },
//       'expired-callback': () => {
//         // Response expired. Ask user to solve reCAPTCHA again.
//         // ...
//       }
//     }, auth);

//     // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//     //     'size': 'normal',
//     //     'callback': (response) => {
//     //     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     //         console.log(response);
//     //     },
//     //     'expired-callback': () =>{
//     //         console.log("Captcha Expired");
//     //     }
//     // });

//     const appVerifier = window.recaptchaVerifier;

//     // const auth = getAuth();
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         // ...
//       }).catch((error) => {
//         // Error; SMS not sent
//         // ...
//       });
//     // var cverify = window.recaptchaVerifier;

//     // firebase.auth().signInWithPhoneNumber(phoneNumber, cverify)
//     // .then((response) => {
//     //     // SMS sent. Prompt user to type the code from the message, then sign the
//     //     // user in with confirmationResult.confirm(code).
//     //     console.log(response);
//     //     window.confirmationResult=response;
//     // }).catch((error) => {
//     //     // Error; SMS not sent
//     //     console.log(error);
//     // });
//   }

//   const login = () => {
//     // confirmationResult.confirm(code).then((result) => {
//     //     // User signed in successfully.
//     //     console.log(result);
//     //     const user = result.user;
//     //     // ...
//     //   }).catch((error) => {
//     //     // User couldn't sign in (bad verification code?)
//     //     // ...
//     //   });
//     window.confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       // const user = result.user;
//       // ...
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }

//   return (
//     <div>
//       <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//       <button onClick={generateOTP}>Generate OTP</button>
//       <input type="number" value={code} onChange={(e) => setCode(e.target.value)} />
//       <button onClick={login}>LogIn</button>
//     </div>
//   )
// }

export default Login;




// function Login1() {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   // function to update state of name with
//   // value enter by user in form
//   const handleChange = (e) => {
//     setName(e.target.value);
//   }
//   // function to update state of password with
//   // value enter by user in form
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form>
//           <h3> Sign-up Form </h3>
//           <label >
//             Username:
//           </label><br />
//           <input type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />

//           <label >
//             Password:
//           </label><br />
//           <input type="password" value={password} required onChange={(e) => { handleChange(e) }} /><br />
//           <input class="Submit" type="submit" value="Submit" />
//         </form>
//       </header>
//     </div>
//   );
// }