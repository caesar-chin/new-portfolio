import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeButton(darkMode: any) {
  const [darkModeState, setDarkMode] = React.useState(darkMode);

  const initialMode = () => {
    if (window.localStorage.getItem("color-theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };

  React.useEffect(() => initialMode(), []);

  const changeMode = () => {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkMode(true);
      }
    }
  };

  return (
    <div className="group">
      <DarkModeSwitch checked={darkModeState} onChange={changeMode} size={40} />
    </div>
  );
}
