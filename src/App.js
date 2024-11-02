import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import "./App.css";
import "./components/Compiler.css";
import Page1 from "./components/Page1";
import Resigter from "./components/Resigter";
import Visit from "./components/Visit";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JavaCompiler from "./components/JavaCompiler";
import Compilers from "./components/Compilers";
import PythonCompiler from "./components/PythonCompiler";
import CCompiler from "./components/CCompiler";
import CCompilerVisit from "./components/CCompilerVisit";
import JavaCompilerVisit from "./components/JavaCompilerVisit";
import PythonCompilerVisit from "./components/PythonCompilerVisit";
import CppCompilerVisit from "./components/CppCompilerVisit";
import CppCompiler from "./components/CppCompiler";

//nsdsab19
const App = () => {
  const [username, setUsername] = useState(""); // Store username in state

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Resigter" element={<Resigter />} />
          <Route path="/Visit" element={<Visit />} />
          <Route
            path="/SignIn"
            element={<SignIn setUsername={setUsername} />}
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/JavaCompiler" element={<JavaCompiler />} />
          <Route
            path="/Compilers"
            element={<Compilers username={username} />}
          />
          <Route path="/PythonCompiler" element={<PythonCompiler />} />
          <Route path="/CCompiler" element={<CCompiler />} />
          <Route path="/CCompilerVisit" element={<CCompilerVisit />} />
          <Route path="/JavaCompilerVisit" element={<JavaCompilerVisit />} />
          <Route
            path="/PythonCompilerVisit"
            element={<PythonCompilerVisit />}
          />
          <Route path="/CppCompilerVisit" element={<CppCompilerVisit />} />
          <Route path="/CppCompiler" element={<CppCompiler />} />

        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
