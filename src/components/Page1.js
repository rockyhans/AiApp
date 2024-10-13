import React from "react";
import { Link } from "react-router-dom";
import "./Page1.css";

function Page1() {
  return (
    <div className="page1">
      <div className="component1">
        <h1>CodeAI</h1>
        {/* <Link to="/Resigter" className="x">
          <button>
            <span className="material-symbols-outlined send">login</span>
          </button>
        </Link> */}
        <div className="buttons">
          <Link to="/Visit">
            <button
              className="directWeb btns"
              style={{ border: "2px solid rgb(113, 226, 251, 0.2)" }}
            >
              <b>Visit Website</b>
            </button>
          </Link>
          <Link to="/Resigter">
            <button
              className="getStarted btns"
              style={{ border: "2px solid rgb(113, 226, 251, 0.2)" }}
            >
              <b>Get Started</b>
            </button>
          </Link>
          
        </div>
        <Link to="/Resigter" className="x">
          <button>
            <span className="material-symbols-outlined send">login</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page1;
