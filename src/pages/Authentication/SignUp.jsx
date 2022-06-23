import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "styles/signup.css";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
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
    signupValidation(signUpData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password.length < 8) {
      setSignUpError("Password must contain 8 characters");
    } else {
      sendSignUpData(signUpData);
    }
  };

  let lastLocation = location?.state?.from?.pathname;

  const signupValidation = ({ password }) => {
    if (password.length > 0) {
      if (password[0] === " ") {
        setSignUpError("Password cannot start with an empty space");
      } else {
        setSignUpError("");
      }
    }
  };

  const sendSignUpData = async (data) => {
    if (data.password === data.confirmPassword) {
      if (signUpError === "") {
        try {
          const response = await axios.post("/api/auth/signup", data);
          if (response.status === 201) {
            const { data } = response;
            const userToken = data.encodedToken;
            localStorage.setItem("userToken", userToken);
            navigate(lastLocation ?? "/");
          }
        } catch (error) {
          setSignUpError("An error occurred.");
          console.log(error);
        }
      }
    } else {
      setSignUpError("Passwords don't match.");
    }
  };

  return (
    <div className="page-body">
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
            <p className="p-sm ">*Password must contain 8 characters</p>
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
          <button className="btn link-btn-outline signup-btn icon-dark">
            Sign Up
          </button>
          <div className="existing-user">
            <Link to="/login" className="link-in-btn login">
              Already have an account
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
