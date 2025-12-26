// components/DarkModeToggle.js
"use client"; // This line makes the component a client component
import Image from "next/image";
import dark from "../assests/images/dark.svg";
import light from "../assests/images/light.svg";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("dark-mode", newDarkMode);
  };

  return (
    <button className=" p-2 rounded-md" onClick={toggleDarkMode}>
      {darkMode ? (
        <Image alt="dark" src={dark} width={40} height={40}></Image>
      ) : (
        <Image alt="white" src={light} width={40} height={40}></Image>
      )}
    </button>
  );
}
