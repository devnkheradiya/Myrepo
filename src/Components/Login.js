import React from 'react';
import './style.css';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          {/* <input type="text" placeholder="Principal" /> */}
          <label for="">Principal-ADIT</label>
          <i className="zmdi zmdi-account zmdi-hc-lg"></i>
        </div>

        <div className="input-container">
          <input type="password" placeholder="Password" />
          <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
