import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, showSidebar, setShowSidebar }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
