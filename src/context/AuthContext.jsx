import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/users/me")
        .then((res) => {
          const { userId, username } = res.data.data;
          setUser({ userId, username });
        })
        .catch(() => {
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  const logout = () => {
    api.post("/auth/logout").catch(() => {});
    setUser(null);
  };

  return (
      <AuthContext.Provider value={{ user, setUser, logout, loading }}>
        {children}
      </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}