import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("orange");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
