import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.authToken);
      setToken(data.authToken);
      navigate('/');
    }
  };

  const signup = async (name, email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.authToken);
      setToken(data.authToken);
      navigate('/');
    }
  };

  const deleteAccount = async () => {
    const response = await fetch('http://localhost:5000/api/auth/deleteaccount', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.removeItem('token');
      setToken(null);
      navigate('/signup');
    } else {
      console.error('Error deleting account:', data);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
