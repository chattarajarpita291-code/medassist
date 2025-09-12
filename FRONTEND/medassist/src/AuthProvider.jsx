import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // restore user from localStorage on load (optional)
  useEffect(() => {
    const saved = localStorage.getItem("authUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const signIn = (userData) => {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}