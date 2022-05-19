import axios from "axios";
import { useTheme } from "contexts/contexts";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "styles/signup.css";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [signUpError, setSignUpError] = useState("");
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const setUserData = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendSignUpData(signUpData);
  };

  let lastLocation = location.state?.from?.pathname;
  const sendSignUpData = async (data) => {
    if (data.password === data.confirmPassword) {
      try {
        const response = await axios.post("/api/auth/signup", data);
        if (response.status === 201) {
          const { data } = response;
          const userToken = data.encodedToken;
          localStorage.setItem("userToken", userToken);
          navigate(lastLocation);
        }
      } catch (error) {
        setSignUpError("An error occurred.");
        console.log(error);
      }
    } else {
      setSignUpError("Passwords don't match!!");
    }
  };

  return (
    <div className={theme === "light" ? "page-body" : "page-body dark"}>
      <section className="sign-up-container">
        <h2 className="container-title">Sign Up</h2>
        <form className="new-user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="first-name"
            name="firstName"
            placeholder="First Name"
            required
            onChange={setUserData}
          />
          <input
            type="text"
            className="last-name"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={setUserData}
          />
          <input
            type="email"
            className="email-id"
            name="email"
            placeholder="Email ID"
            required
          />
          <div className="password-details">
            <input
              type={showPassword.password ? "text" : "password"}
              name="password"
              className="password"
              placeholder="Password"
              required
              onChange={setUserData}
            />
            <span
              className="toggle-pwd material-icons material-icons-outlined"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  password: !showPassword.password,
                }))
              }
            >
              {showPassword.password ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="password-details">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="confirm-pwd"
              placeholder="Confirm Password"
              required
              onChange={setUserData}
            />
            <span
              className="toggle-pwd material-icons material-icons-outlined"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirmPassword: !showPassword.confirmPassword,
                }))
              }
            >
              {showPassword.confirmPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
          {signUpError && <p className="val-error"> {signUpError}</p>}
          <div className="checkbox-btn t-and-c">
            <input type="checkbox" name="checkbox" required />
            <label className="label">I accept all Terms & Conditions</label>
          </div>
          <button className="btn link-btn-outline signup-btn icon-dark">
            Sign Up
          </button>
          <div className="existing-user">
            <Link to="/login" className="link-in-btn p-lg">
              Already have an account
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
