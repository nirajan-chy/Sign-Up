// src/components/Signup/Signup.jsx
import React, { useState } from 'react';
import './Signup.css'; // Import your styles

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add form validation or API calls here
    console.log({ name, email, password });
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <p id="p1">Let's get started with us</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>

      <p id="p2">
        Already have an account? <a href="/login">Log In</a>
      </p>

      <div className="social-login">
        <p id="p4">──────────────or───────────────</p>
        <div className="social-icons">
          <a href="#"><img src="/assets/google.png" alt="Google" />Sign up with Google</a>
          <a href="#"><img src="/assets/facebook.png" alt="Facebook" />Sign up with Facebook</a>
          <a href="#"><img src="/assets/twitter.png" alt="Twitter" />Sign up with Twitter</a>
        </div>
      </div>

      <p id="p3">
        By signing up to create an account I accept <a href="#">Company's Terms of Use and Privacy Policy</a>
      </p>
    </div>
  );
}
export default Signup