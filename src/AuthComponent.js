import React, { useState } from 'react';
import axios from 'axios';

const AuthComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handle signup
    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/signup', { name, email, password });
            alert('Signup successful');
        } catch (error) {
            alert('Error signing up');
        }
    };

    // Handle login
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('authToken', token);
            setIsLoggedIn(true);
            alert('Login successful');
        } catch (error) {
            alert('Error logging in');
        }
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        alert('Logged out successfully');
    };

    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    <h2>Signup</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignup}>Signup</button>

                    <h2>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome, you are logged in!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default AuthComponent;
