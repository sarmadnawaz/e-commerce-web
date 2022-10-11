import { useReducer } from "react";
import './AuthForm.styles.scss'


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "", 
  confirmPassword: "",
};

const reducer = (state, action) => ({
    ...state,
    ...action
})

const AuthForm = ({ onSubmitHandler, type = 'signup' }) => {

  const [formFields, setFormFields] = useReducer(reducer, defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ [name]: value });
  };

  async function handleformSubmit(e) {
    e.preventDefault();
    if(type === 'signup' && password !== confirmPassword){
      alert("password doesn't match with confirm passowrd");
      return
    }
    onSubmitHandler(formFields).then(
      () => setFormFields(defaultFormFields),
      (error) => {}
    )  
  }

  return (
    <div className="auth-form-container">
      <h1>{type === 'signin' ? 'Already have an account' :  "Don't have an account"}</h1>
      <h2>{type === 'signin' ? 'Sign in' : 'Sign up'} with your email and password</h2>
      <form className="auth-form" onSubmit={handleformSubmit}>
        {type === 'signup' && <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required={true}
          placeholder="display name"
        />}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required={true}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required={true}
          placeholder="password"
        />
        {type === 'signup' && <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required={true}
          placeholder="confirm password"
        />}
        <button type="submit">{type === 'signin' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
