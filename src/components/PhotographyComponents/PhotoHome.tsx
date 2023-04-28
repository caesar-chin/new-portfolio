import React from "react";
import seattle from "../../assets/seattle.webp";
import umbrellas from "../../assets/umbrellas.webp";
import concert from "../../assets/L1020944.webp";
import streetlandscape from "../../assets/L1020155.webp";

export default function PhotoHome() {
  return (
    <div>
      {/* <div className="text-5xl font-semibold max-sm:text-4xl text-center flex justify-center mb-8 tracking-widest">
        HOME
      </div> */}

      <div className="my-8 flex justify-center">
        <div className="relative">
          <a
            href="/photography/concert"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-300 hover:opacity-100"
          >
            <p className="text-4xl font-semibold text-black">Concert</p>
          </a>
          <a>
            <img src={concert} alt="concert" className="" />
          </a>
        </div>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="relative">
          <a
            href="/photography/streetlandscape"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-300 hover:opacity-100"
          >
            <p className="text-4xl font-semibold text-black">
              Street & Landscape
            </p>
          </a>
          <a>
            <img src={streetlandscape} alt="street_landscape" className="" />
          </a>
        </div>
      </div>
    </div>
  );
}
