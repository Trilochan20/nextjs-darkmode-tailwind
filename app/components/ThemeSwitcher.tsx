"use client";

import {
  HiOutlineSun as SunIcon,
  HiOutlineMoon as MoonIcon,
} from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (resolvedTheme === "dark") {
    return <SunIcon className="h-6 w-6" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return (
      <MoonIcon
        className="h-6 w-6 text-gray-900"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
