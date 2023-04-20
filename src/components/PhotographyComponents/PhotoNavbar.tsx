import React from "react";
import DarkModeButton from "./DarkModeButton";
import { Spin as Hamburger } from "hamburger-react";

type PhotoNavbarProps = {
  darkMode: any;
  title: string;
};

export default function PhotoNavbar({ darkMode, title }: PhotoNavbarProps) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
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
    <header className="flex justify-between flex-row mb-8">
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
            className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red underline underline-offset-8"
          >
            full-stack developer
          </a>{" "}
          &{" "}
          <a
            href="/photography"
            className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red dark:text-dark-grayish-red dark text-sea-foam-green underline underline-offset-8"
          >
            photographer
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        {/* <a
          href="/about"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          About
        </a> */}

        <a
          href="/photography/concert"
          className={`${
            title === "concert"
              ? "text-sea-foam-green dark:text-dark-grayish-red"
              : ""
          } hover:text-sea-foam-green dark:hover:text-dark-grayish-red `}
        >
          Concert
        </a>

        <a
          href="/photography/streetlandscape"
          className={`${
            title === "streetlandscape"
              ? "text-sea-foam-green dark:text-dark-grayish-red"
              : ""
          } hover:text-sea-foam-green dark:hover:text-dark-grayish-red `}
        >
          Street & Landscape
        </a>

        <a
          href="https://www.instagram.com/chinxuehong/"
          target="_blank"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Instagram
        </a>
        <DarkModeButton darkMode={darkMode} />
      </div>

      {/* <div>
          <Hamburger
            toggled={isMenuOpen}
            toggle={setMenuOpen}
            direction="right"
            duration={0.6}
          />
        </div> */}

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
    </header>
  );
}
