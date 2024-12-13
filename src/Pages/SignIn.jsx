import React, { useState } from 'react';
import '../Styles/Signin.css';

const SignIn = () => {
  const [formdata, setformdata] = useState({ email: '', password: '' });
  const [error, seterror] = useState('');

  const handledata = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (formdata.email === '' || formdata.password === '') {
      seterror('Please fill out all fields');
    } else {
      seterror('');
      alert('Sign in successful');
      setformdata({email:"",password:""})
    }
  };

  return (
    <>
      <div className="signin-container">
        <form className="signin-form" onSubmit={handlesubmit}>
          <h2>Sign In</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formdata.email}
              onChange={handledata}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formdata.password}
              onChange={handledata}
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
