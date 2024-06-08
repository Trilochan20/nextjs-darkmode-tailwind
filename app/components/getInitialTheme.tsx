const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  }

  // If window or localStorage is not available (server-side rendering), return the default theme
  return "light";
};

export default getInitialTheme;
