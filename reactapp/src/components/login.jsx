import React, { useState } from "react";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./redux/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Validate the input
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    // Password validation: Minimum length of 6 characters (you can adjust this)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");

    // Simulate a successful login for demonstration purposes
    dispatch(login(username));
    navigate("/home");
  };

  return (
    <div className="img">
      <div className="login-cont">
        <h1 className="login-title">Login</h1>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="signup-link">
          ARE YOU ADMIN? <Link to="/adminLogin">Admin Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
