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
      <div className="mt-12 mx-12 text-5xl font-semibold max-sm:text-4xl text-center">
        DEVELOPING SMOOTH USER EXPERIENCES
      </div>
      <div className="mt-12 mb-52">
        <Fade arrows={false} duration={3000} transitionDuration={1500}>
          {imagesArray.map((image) => (
            <div
              className="flex flex-row justify-center each-fade"
              key={image.id}
            >
              <img className="image-clip" src={image.image} alt={image.alt} />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
