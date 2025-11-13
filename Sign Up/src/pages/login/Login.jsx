import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <p id="p1">Let's get started with us</p>

      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <button type="submit">Login</button>

      <p id="p5">Forgot password?</p>
      <p id="p2">
        Don’t have an account? <a href="/signup">Sign Up</a>
      </p>
      <p id="p3">
        By signing up, I accept the{" "}
        <a href="#">Company’s Terms of Use and Privacy Policy</a>.
      </p>
    </div>
  )
}

export default Login