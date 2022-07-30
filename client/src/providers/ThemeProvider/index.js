import { useState, useEffect, useContext, createContext } from "react";

const Theme = { Dark: 'dark', Light: 'light' };

export const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return Theme.Dark
  else return Theme.Light
};

const ThemeContext = createContext({
  theme: Theme.Light,
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getSystemTheme());
  
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => { setTheme((current) => current === Theme.Dark ? Theme.Light : Theme.Dark); };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
