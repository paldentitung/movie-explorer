import { createContext, useState } from "react";

// create context
export const AppContext = createContext();

// AppProvider component
export const AppProvider = ({ children }) => {
  // state for theme
  const [theme, setTheme] = useState("light");
  //   toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Provide the theme and toggleTheme function to all child components
  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
