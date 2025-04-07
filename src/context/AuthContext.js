import { createContext, useState, useContext, useEffect } from 'react';

// Create a context to store authentication data
const AuthContext = createContext();

// This component wraps the entire app and provides auth data
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if token exists in localStorage when app starts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Simulate login by storing token
  const login = () => {
    localStorage.setItem('token', 'sample_token'); // In real-world, this comes from API
    setIsAuthenticated(true);
  };

  // Remove token and logout
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);