import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [name, setName] = useState(undefined);
  const [id, setId] = useState(undefined);

  const isAuth = !!name;
  return (
    <AuthContext.Provider value={{ name, isAuth, setName, id, setId }}>
      {children}
    </AuthContext.Provider>
  );
};
