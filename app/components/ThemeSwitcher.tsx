"use client";
import React from "react";
import { useThemeContext } from "./ThemeContext";
import {
  HiOutlineSun as SunIcon,
  HiOutlineMoon as MoonIcon,
} from "react-icons/hi";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full"
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
