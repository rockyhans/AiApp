import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Page1.css";

function Register() {
  // Set default to 'signIn' for both form and active button
  const [showForm, setShowForm] = useState("signIn");
  const [activeButton, setActiveButton] = useState("signIn");

  const handleClick = (formType) => {
    setShowForm(formType);
    setActiveButton(formType); // Set the clicked button as active
  };

  return (
    <div className="page1">
      <div className="component1">
        <div className="buttonsX">
          {/* Button for Sign In */}
          <button
            onClick={() => handleClick("signIn")}
            className="btns hover1"
            style={{
              color: "skyblue",
              backgroundColor: activeButton === "signIn" ? "rgb(0, 0, 39)" : "",
            }}
          >
            <b>Sign In</b>
          </button>
          {/* Button for Sign Up */}
          <button
            onClick={() => handleClick("signUp")}
            className="getStarted btns hover1"
            style={{
              color: "skyblue",
              backgroundColor: activeButton === "signUp" ? "rgb(0, 0, 39)" : "",
            }}
          >
            <b>Sign Up</b>
          </button>
        </div>
      </div>

      {/* Conditionally render the SignUp or SignIn form based on the showForm state */}
      <div className="form-container">
        {showForm === "signIn" && <SignIn />} {/* Default form: Sign In */}
        {showForm === "signUp" && <SignUp />} {/* Show Sign Up form */}
      </div>
    </div>
  );
}

export default Register;
