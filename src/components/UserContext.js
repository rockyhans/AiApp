// UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const UserContext = createContext();

// Create a Provider Component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the UserContext in other components
export const useUser = () => useContext(UserContext);
