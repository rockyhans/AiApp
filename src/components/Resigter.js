import React, { useState, useEffect } from "react";
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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [showButtonX, setShowButtonX] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtonX(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page1">
      <div className="component11">
        {showButton && (
          <div className="component12">
            {showButton && (
              <div className="xyz">
                <div className="buttonsX">
                  {/* Button for Sign In */}
                  <button
                    onClick={() => handleClick("signIn")}
                    className="hover1"
                    style={{
                      color: "skyblue",
                      backgroundColor:
                        activeButton === "signIn" ? "rgb(0, 0, 39)" : "",
                      border: activeButton === "signIn" ? "none" : "",
                      boxShadow: "none",
                    }}
                  >
                    <b>Sign In</b>
                  </button>
                  {/* Button for Sign Up */}
                  <button
                    onClick={() => handleClick("signUp")}
                    className="getStarted hover1"
                    style={{
                      color: "skyblue",
                      backgroundColor:
                        activeButton === "signUp" ? "rgb(0, 0, 39)" : "",
                      border: activeButton === "signUp" ? "none" : "",
                      boxShadow: "none",
                    }}
                  >
                    <b>Sign Up</b>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="form-container">
        {showButtonX && (
          <div className="ffff">
            {showForm === "signIn" && <SignIn />}
            {showForm === "signUp" && <SignUp />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
