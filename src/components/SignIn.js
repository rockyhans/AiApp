import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://appbackend-7d64.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("authToken", data.authToken);
      alert("Login successful");
      navigate("/Compilers");

    } else {
      alert(data.error);
    }
    
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <label className="label">
          <b> Name </b>
          <br />
          <input
            type="text"
            name="name"
            className="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="label">
          <b> Email </b>
          <br />{" "}
          <input
            type="email"
            name="email"
            className="inputName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="label">
          <b> Password </b>
          <br />{" "}
          <input
            type="password"
            name="password"
            className="inputName"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
