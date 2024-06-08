// "use client";
// import React, { createContext, useContext, ReactNode } from "react";
// import useTheme from "./useTheme";

// interface ThemeContextType {
//   theme: string;
//   setTheme: (theme: string) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useThemeContext must be used within a ThemeProvider");
//   }
//   return context;
// };

"use client";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import useTheme from "./useTheme";
import getInitialTheme from "./getInitialTheme";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.className = initialTheme;

    const handleThemeChange = () => {
      document.documentElement.className = theme;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", theme);
      }
    };

    handleThemeChange();

    window.addEventListener("storage", handleThemeChange);
    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
