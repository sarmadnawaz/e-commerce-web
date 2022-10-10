import { useState } from "react";
import './SignUpForm.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "", 
  confirmPassword: "",
};

const SignUpForm = ({ onSubmitHandler, type = 'signup' }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  async function handleformSubmit(e) {
    e.preventDefault();
    if(type === 'signup'){
      if (password !== confirmPassword) {
      alert("password doesn't match with confirm passowrd");
      return
      }
    }
    onSubmitHandler(formFields);
    setFormFields(defaultFormFields);
  }

  return (
    <div className="sign-up-form-container">
      <h1>{type === 'signin' ? 'Already have an account' :  "Don't have an account"}</h1>
      <h2>{type === 'signin' ? 'Sign in' : 'Sign up'} with your email and password</h2>
      <form className="sign-up-form" onSubmit={handleformSubmit}>
        {/* <label>Display Name</label> */}
        {type === 'signup' && <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          requried
          placeholder="display name"
        />}
        {/* <label>Email</label> */}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          requried
          placeholder="email"
        />
        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          requried
          placeholder="password"
        />
        {/* <label>Confirm Password</label> */}
        {type === 'signup' && <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          requried
          placeholder="confirm password"
        />}
        <button type="submit">{type === 'signin' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default SignUpForm;
