import React, { useState } from "react";
import "./SignIn.css";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful');
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSignup}>
          <label className="label" style={{ color: "rgb(37, 37, 37)" }}>
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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
