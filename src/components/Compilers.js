import React, { useState } from "react";
import JavaCompiler from "./JavaCompiler"; // Java Compiler component
import CCompiler from "./CCompiler"; // C Compiler component
import PythonCompiler from "./PythonCompiler"; // Python Compiler component
import logo from "../srcP.jpg";
import UserImg from "../userImg.jpg";

function Compilers({ username }) {
  const [selectedCompiler, setSelectedCompiler] = useState("java");

  return (
    <>
      <div className="App">
        <div className="blur">
          <header>
            <img alt="logo" src={logo} className="logoImg" />
            <h1 className="x" style={{ color: "orangered" }}>
              CodeAI
            </h1>
            <div className="userI">
              <a href="/LogOut">
                {" "}
                <h3>{username ? username : "User Name"}</h3>
              </a>
              <img alt="logo" src={UserImg} />
            </div>
          </header>
          <div className="ndNav">
            <div>
              <a href="/use">
                <h3>How to use these compilers.....?</h3>
              </a>
            </div>
            <div className="tab-buttons">
              <button
                className={selectedCompiler === "java" ? "active" : ""}
                onClick={() => setSelectedCompiler("java")}
              >
                <b>Java Compiler</b>
              </button>
              <button
                className={selectedCompiler === "c" ? "active" : ""}
                onClick={() => setSelectedCompiler("c")}
              >
                <b>C Compiler</b>
              </button>
              <button
                className={selectedCompiler === "python" ? "active" : ""}
                onClick={() => setSelectedCompiler("python")}
              >
                <b>Python Compiler</b>
              </button>
            </div>
          </div>
        </div>

        <div className="compiler-container">
          <div
            className={
              selectedCompiler === "java" ? "compiler active" : "compiler"
            }
          >
            <JavaCompiler />
          </div>
          <div
            className={
              selectedCompiler === "c" ? "compiler active" : "compiler"
            }
          >
            <CCompiler />
          </div>
          <div
            className={
              selectedCompiler === "python" ? "compiler active" : "compiler"
            }
          >
            <PythonCompiler />
          </div>
        </div>
      </div>
    </>
  );
}

export default Compilers;
