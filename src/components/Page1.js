import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Page1.css";
import SplashScreen from "./SplashScreen";

function Page1() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="page1">
        <SplashScreen />
        <div className="component1">
          <h1>
            Welcome to our website{" "}
            <Link to="/about" className="codeAi">
              CodeAI
            </Link>{" "}
            !
          </h1>
          <div className="instructions-container">
            <h2>instructions : </h2>
            <ul>
              <li>
                <b>Direct Visit :</b> This website offers a direct visit option,
                allowing you to access the main page without logging in or
                signing up. However, please note that without logging in, you
                will not be able to create files or save your code for future
                use. Click on Visit Website.{" "}
                <Link to="/Visit">Visit the website</Link>.
              </li>
              <li>
                <b>Login :</b> If you already have an account, please{" "}
                <Link to="/Resigter">log in here </Link> or Get Started.
              </li>
              <li>
                <b>Sign Up :</b> If you don't have an account, please{" "}
                <Link to="/Resigter">sign up here</Link> or Get Started.
              </li>
            </ul>
          </div>
          <div className="btnsDiv">
            {showButton && (
              <div className="buttons">
                <Link to="/Visit">
                  <button className="directWeb btns">
                    <b>Visit Website</b>
                  </button>
                </Link>

                <Link to="/Resigter">
                  <button className="getStarted btns">
                    <b>Get Started</b>
                  </button>
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default Page1;
