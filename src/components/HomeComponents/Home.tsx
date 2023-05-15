import React from "react";
import cherryblossom from "../../assets/cherryblossom.webp";
import cherryblossomtwopeople from "../../assets/cherryblossomtwopeople.webp";
import ferriswheel from "../../assets/ferriswheel.webp";
import onetwofive from "../../assets/onetwofive.webp";
import penn from "../../assets/penn.webp";
import seattle from "../../assets/seattle.webp";
import umbrellas from "../../assets/umbrellas.webp";
import washingtonuniversity from "../../assets/washingtonuniversity.webp";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

export default function Home() {
  const imagesArray = [
    {
      id: 1,
      image: cherryblossom,
      alt: "cherryblossom",
    },
    {
      id: 2,
      image: cherryblossomtwopeople,
      alt: "cherryblossomtwopeople",
    },
    {
      id: 3,
      image: ferriswheel,
      alt: "ferriswheel",
    },
    {
      id: 4,
      image: onetwofive,
      alt: "onetwofive",
    },
    {
      id: 5,
      image: penn,
      alt: "penn",
    },
    {
      id: 6,
      image: seattle,
      alt: "seattle",
    },
    {
      id: 7,
      image: umbrellas,
      alt: "umbrellas",
    },
    {
      id: 8,
      image: washingtonuniversity,
      alt: "washingtonuniversity",
    },
  ];

  return (
    <div>
      <div className="mx-12 mt-12 text-center text-5xl font-semibold max-sm:text-4xl">
        DEVELOPING SMOOTH USER EXPERIENCES
      </div>

      <div className="mb-52 mt-12">
        <Fade arrows={false} duration={3000} transitionDuration={1500}>
          {imagesArray.map((image) => (
            <div
              className="each-fade flex flex-row justify-center"
              key={image.id}
            >
              <div className="relative">
                <a
                  href="/photography"
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-300 hover:opacity-100"
                >
                  <p className="text-3xl font-semibold text-black">
                    Click to view my photography portfolio
                  </p>
                </a>
                <a>
                  <img
                    className="image-clip hover:cursor-pointer"
                    src={image.image}
                    alt={image.alt}
                  />
                </a>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
