"use client";
// import { useEffect, useState } from "react";

// const useTheme = () => {
//   const [theme, setTheme] = useState<string>("light");

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       setTheme(storedTheme);
//     } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       setTheme("dark");
//     }
//   }, []);

//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return { theme, setTheme };
// };

// export default useTheme;

// hooks/useTheme.tsx

// import { useEffect, useState } from "react";

// const useTheme = () => {
//   const [theme, setTheme] = useState<string>(() => {
//     if (typeof window !== "undefined" && window.localStorage) {
//       const storedTheme = localStorage.getItem("theme");
//       if (storedTheme) {
//         return storedTheme;
//       }

//       const prefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       return prefersDark ? "dark" : "light";
//     }

//     return "light"; // Default to light mode
//   });

//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return { theme, setTheme };
// };

// export default useTheme;

import { useEffect, useState } from "react";
import getInitialTheme from "./getInitialTheme";

const useTheme = () => {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
