import React, { useState } from "react";
import "./Login.css";

function Login() {
  // State to toggle between Sign-Up and Login forms
  const [isLogin, setIsLogin] = useState(false);

  // Function to toggle the form
  const handleToggleForm = () => {
    setIsLogin((prev) => !prev); // Toggle between Sign-Up and Login
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign-Up"}</h1>
        <div className="loginsignupfields">
          {/* Show inputs based on the form type */}
          {isLogin ? (
            <>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
            </>
          ) : (
            <>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="License ID" />
              <input type="text" placeholder="Address" />
            </>
          )}
        </div>
        <button>{isLogin ? "Login" : "Continue"}</button>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={handleToggleForm}
            style={{ cursor: "pointer", color: "#007bff" }}
          >
            {isLogin ? "Sign Up Here" : "Login Here"}
          </span>
        </p>
        <div className="agree">
          <input type="checkbox" />
          <p>Yes, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
