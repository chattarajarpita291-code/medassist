import React, { useState } from "react";
import "../src/assets/css/Login.css"; // ⭐ make sure path is correct
import { Link } from "react-router-dom";


const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  // ✅ State for Login
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  // ✅ State for Register
  const [registerValues, setRegisterValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ✅ Handle input change for Login
  const handleLoginChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  // ✅ Handle input change for Register
  const handleRegisterChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  // ✅ Submit handlers
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", loginValues);
    // 👉 API call or logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Submitted:", registerValues);
    // 👉 API call or logic here
  };

  return (
    <div className="wrapper">
      <Link to="/" id="skip"><i  class="fas fa-arrow-left"></i>Skip to Home Page</Link>
      <div className={`auth-container ${isRegister ? "register-mode" : ""}`}>
        



        {/* Forms Section */}
        <div className="forms-container">
          {/* Login Form */}
          {!isRegister && (
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginValues.username}
                  onChange={handleLoginChange}
                  required
                />
                <i className="fa fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginValues.password}
                  onChange={handleLoginChange}
                  required
                />
                <i className="fa fa-lock"></i>
              </div>
              <button type="submit" className="Button">Login</button>
            </form>
          )}

          {/* Register Form */}
          {isRegister && (
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <h2>Register</h2>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={registerValues.name}
                  onChange={handleRegisterChange}
                  required
                />
                <i className="fa fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={registerValues.email}
                  onChange={handleRegisterChange}
                  required
                />
                <i className="fa fa-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerValues.password}
                  onChange={handleRegisterChange}
                  required
                />
                <i className="fa fa-lock"></i>
              </div>
              <button type="submit" className="Button">Register</button>
            </form>
          )}

        </div>

        {/* Overlay Section */}
        <div className="overlay-container">
          {/* Left Side (Register Welcome) */}
          <div className="overlay-panel overlay-left">
            <h2>Hello, Welcome!</h2>
            <p>Don’t have an account? Register now and join us.</p>
            <div className="button-wrapper">
              <button className="Button" onClick={() => setIsRegister(true)}>
                Register
              </button>
            </div>
          </div>

          {/* Right Side (Login Welcome) */}
          <div className="overlay-panel overlay-right">
            <h2>Welcome Back!</h2>
            <p>Already have an account? Login with your details.</p>
            <button className="Button" onClick={() => setIsRegister(false)}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
