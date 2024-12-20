import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const isAuth = !!user;
  return (
    <AuthContext.Provider value={{ user, isAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
