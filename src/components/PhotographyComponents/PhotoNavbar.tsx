import React from "react";
import DarkModeButton from "./DarkModeButton";

export default function PhotoNavbar(darkMode: any) {
  // const [darkModeState, setDarkMode] = React.useState(darkMode);

  // const initialMode = () => {
  //   console.log(darkModeState);

  //   if (window.localStorage.getItem("color-theme") === "dark") {
  //     document.documentElement.classList.add("dark");
  //     setDarkMode(true);
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setDarkMode(false);
  //   }
  // };

  // React.useEffect(() => initialMode(), []);

  // const changeMode = () => {
  //   // if set via local storage previously
  //   if (localStorage.getItem("color-theme")) {
  //     if (localStorage.getItem("color-theme") === "light") {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("color-theme", "dark");
  //       setDarkMode(true);
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("color-theme", "light");
  //       setDarkMode(false);
  //     }

  //     // if NOT set via local storage previously
  //   } else {
  //     if (document.documentElement.classList.contains("dark")) {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("color-theme", "light");
  //       setDarkMode(false);
  //     } else {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("color-theme", "dark");
  //       setDarkMode(true);
  //     }
  //   }
  // };

  return (
    <header className="flex justify-between flex-row mb-4">
      <div className="flex flex-col">
        <a
          href="/photography"
          className="text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Caesar Chin
        </a>
        <div className="">
          <a
            href="/"
            className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
          >
            full-stack developer
          </a>{" "}
          &{" "}
          <a
            href="/photography"
            className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
          >
            photographer
          </a>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <DarkModeButton darkMode={darkMode} />
        {/* <div>
          {darkModeState ? (
            <a
              className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
              onClick={changeMode}
            >
              Dark Mode
            </a>
          ) : (
            <a
              className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
              onClick={changeMode}
            >
              Light Mode
            </a>
          )}
        </div> */}
      </div>
    </header>
  );
}
