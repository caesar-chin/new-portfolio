import React, { useEffect } from "react";

interface EditProps {
  darkMode: boolean;
}

export default function Edit({ darkMode }: EditProps) {
  const testCookie = async () => {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/test_cookies`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status >= 400) {
          console.log("Log in to GitHub again");
          window.location.href = `${
            import.meta.env.PUBLIC_HOMEPAGE_URL
          }/dashboard`;
        } else {
          console.log("Authenticated");
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.href = `${
          import.meta.env.PUBLIC_HOMEPAGE_URL
        }/dashboard`;
      });
  };

  useEffect(() => {
    testCookie();
  }, []);

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
          href="/photography"
          className="text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Caesar Chin
        </a>
        <div className="">
          <a
            href="/"
            className="underline underline-offset-8 hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
          >
            full-stack developer
          </a>{" "}
          &{" "}
          <a
            href="/photography"
            className="dark text-sea-foam-green underline underline-offset-8 hover:text-sea-foam-green dark:text-dark-grayish-red dark:hover:text-dark-grayish-red"
          >
            photographer
          </a>
        </div>
      </div>

      <div className="flex flex-col text-right">
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
