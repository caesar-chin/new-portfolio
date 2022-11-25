import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between flex-row  mb-4">
      <div className="flex flex-col">
        <a
          href="/"
          className="text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Caesar Chin
        </a>
        <div className="">full-stack developer & devops</div>
      </div>

      <div className="flex flex-col">
        <a href="/about">About</a>
        <a href="#projects">Projects</a>
        <a href="/photography">Photography</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/caesar-chin" target="_blank">
          Github
        </a>
        <a>Light Mode</a>
      </div>
    </header>
  );
}
