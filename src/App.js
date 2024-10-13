import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Page1 from "./components/Page1";
import Resigter from "./components/Resigter";
import Visit from "./components/Visit";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JavaCompiler from "./components/JavaCompiler";
import Compilers from "./components/Compilers";
import PythonCompiler from "./components/PythonCompiler";
import CCompiler from "./components/CCompiler";

const App = () => {
  const [username, setUsername] = useState("");  // Store username in state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Resigter" element={<Resigter />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/SignIn" element={<SignIn setUsername={setUsername}/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/JavaCompiler" element={<JavaCompiler />} />
        <Route path="/Compilers" element={<Compilers username={username}/>} />
        <Route path="/PythonCompiler" element={<PythonCompiler />} />
        <Route path="/CCompiler" element={<CCompiler />} />
      </Routes>
    </Router>
  );
};

export default App;
