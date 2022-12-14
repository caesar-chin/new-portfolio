import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between border-t-half border-faded-grey mt-32 mb-16 pt-8">
      <div>
        <a
          href="/"
          className="text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Caesar Chin
        </a>
        <div>built with Astro and React</div>
        <div className="flex flex-row my-4">
          <a href="https://github.com/caesar-chin" target="_blank">
            <button className="mt-4 text-xl w-28 text-center rounded-full leading-10 border-[2px] border-faded-grey hover:border-sea-foam-green dark:hover:border-dark-grayish-red dark:border-faded-grey mr-4">
              Github
            </button>
          </a>

          <a href="https://www.linkedin.com/in/caesar-chin/" target="_blank">
            <button className="mt-4 text-xl w-28 text-center rounded-full leading-10 border-[2px] border-faded-grey hover:border-sea-foam-green dark:hover:border-dark-grayish-red dark:border-faded-grey mr-4">
              LinkedIn
            </button>
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
      </div>
    </div>
  );
}
