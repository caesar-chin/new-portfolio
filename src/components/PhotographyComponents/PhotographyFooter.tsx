import React from "react";

type PhotographyFooterType = {
  title: string;
};

export default function PhotographyFooter({ title }: PhotographyFooterType) {
  return (
    <div className="mb-16 mt-32 flex flex-row justify-between border-t-half border-faded-grey pt-8">
      <div>
        <a
          href="/photography"
          className="text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        >
          Caesar Chin
        </a>
        <div>built with Astro and React</div>
        <div className="my-4 flex flex-row">
          <a href="https://github.com/caesar-chin" target="_blank">
            <button className="mr-4 mt-4 w-28 rounded-full border-[2px] border-faded-grey text-center text-xl leading-10 hover:border-sea-foam-green dark:border-faded-grey dark:hover:border-dark-grayish-red">
              Github
            </button>
          </a>

          <a href="https://www.linkedin.com/in/caesar-chin/" target="_blank">
            <button className="mr-4 mt-4 w-28 rounded-full border-[2px] border-faded-grey text-center text-xl leading-10 hover:border-sea-foam-green dark:border-faded-grey dark:hover:border-dark-grayish-red">
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
          href="/photography/concert"
          className={`${
            title === "concert"
              ? "text-sea-foam-green dark:text-dark-grayish-red"
              : ""
          } hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
        >
          Concert
        </a>

        <a
          href="/photography/streetlandscape"
          className={`${
            title === "streetlandscape"
              ? "text-sea-foam-green dark:text-dark-grayish-red"
              : ""
          } hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
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
      </div>
    </div>
  );
}
