import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkModeButton from "../PhotographyComponents/DarkModeButton";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {
  darkMode: boolean;
}

export default function Login({ darkMode }: LoginProps) {
  const [loginClickState, handleLoginClickState] = useState(false);

  const handleLoginClick = async () => {
    console.log(`${import.meta.env.PUBLIC_API_URL}/auth/github`);
    window.location.href = `${import.meta.env.PUBLIC_API_URL}/auth/github`;
    handleLoginClickState(true);
  };

  const testCookies = async () => {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/test_cookies`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
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

        <div>
          <DarkModeButton darkMode={darkMode} />
        </div>

        {/* <FontAwesomeIcon icon={faGithub} /> */}
      </div>

      <div className="flex justify-center ">
        <div className="mt-16 ">
          <div className="text-md text-center">Login for Dashboard</div>

          <div className="mt-8">
            {loginClickState ? (
              <div className="text-center">Authorizing...</div>
            ) : (
              <div
                className="text-center underline hover:cursor-pointer hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
                onClick={handleLoginClick}
              >
                Log in with GitHub
              </div>
            )}
          </div>
          <div
            className="text-center underline hover:cursor-pointer hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
            onClick={testCookies}
          >
            Test
          </div>
        </div>
      </div>
    </div>
  );
}
