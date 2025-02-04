import React, { createContext, useState, useContext, ReactNode } from 'react';

type ThemeContextType = {
  toolbarColor: string;
  setToolbarColor: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderComponent = ({ children }: { children: ReactNode }) => {
  const [toolbarColor, setToolbarColor] = useState("#ff9800"); // צבע ברירת מחדל

  return (
    <ThemeContext.Provider value={{ toolbarColor, setToolbarColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
