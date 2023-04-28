import React from "react";

type NavbarProps = {
  darkMode: any;
};

export default function Navbar({ darkMode }: NavbarProps) {
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
    <header className="mb-4 flex flex-row justify-between ">
      <div className="flex flex-col">
        <a
          href="/"
          className="text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Caesar Chin
        </a>
        <div className="">
          <a
            href="/"
            className=" text-sea-foam-green underline underline-offset-8 hover:text-sea-foam-green dark:text-dark-grayish-red dark:hover:text-dark-grayish-red"
          >
            full-stack developer
          </a>{" "}
          &{" "}
          <a
            href="/photography"
            className="underline underline-offset-8 hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
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
          href="#projects"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Projects
        </a>
        <a
          href="/photography"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Photography
        </a>
        <a
          href="#contact"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Contact
        </a>
        <a
          href="https://github.com/caesar-chin"
          target="_blank"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/caesar-chin/"
          target="_blank"
          className="hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          LinkedIn
        </a>

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
      </div>
    </header>
  );
}
