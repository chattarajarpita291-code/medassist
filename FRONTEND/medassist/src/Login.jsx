import React, { useState } from "react";
import "../src/assets/css/Login.css"; // ⭐ make sure path is correct
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios if you plan to make API calls
import { PiEyeDuotone } from "react-icons/pi";
import { PiEyeSlashDuotone } from "react-icons/pi";
import { VscEye } from "react-icons/vsc";
import { TbEyeClosed } from "react-icons/tb";
import App from './App.jsx';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


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
    e.preventDefault();
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value })
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
    axios.post('http://localhost:3000/register', registerValues)
    .then(response => {
      console.log("Registration successful:", response.data);
    })
    .catch(error =>{
      console.error("Error during registration:", error);
    })
  };
function togglePasswordVisibility() {
  const open = document.getElementById("eye_open");
  if (open){
    open.classList.toggle(<PiEyeSlashDuotone />);
  }
}

  return (
    <div className="wrapper">
      <Link to="/App" id="skip"><i  class="fas fa-arrow-left"></i>Skip to Home Page</Link>
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
                <i className="fa fa-user icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="Email"
                  value={registerValues.email}
                  onChange={handleRegisterChange}
                  required
                />
                <i className="fa fa-envelope icon"></i>
              </div>
              <div className="input-box">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={registerValues.password}
                  onChange={handleRegisterChange}
                  required
                />
                {showPassword ? (
    <VscEye
      id="eye_icon"
      
      onClick={() => setShowPassword(false)}   // 👈 hide password
    />
  ) : (
    <TbEyeClosed
      id="eye_icon"
      
      onClick={() => setShowPassword(true)}    // 👈 show password
    />
  )}
               
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
