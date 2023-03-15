import React from "react";
import seattle from "../../assets/seattle.webp";
import umbrellas from "../../assets/umbrellas.webp";

export default function PhotoHome() {
  return (
    <div>
      {/* <div className="text-5xl font-semibold max-sm:text-4xl text-center flex justify-center mb-8 tracking-widest">
        HOME
      </div> */}

      <div className="flex justify-center my-8">
        <div className="relative">
          <a
            href="/photography/concert"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300"
          >
            <p className="text-black text-4xl font-semibold">Concert</p>
          </a>
          <a>
            <img src={seattle} alt="concert" className="" />
          </a>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative">
          <a
            href="/photography/streetlandscape"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300"
          >
            <p className="text-black text-4xl font-semibold">
              Street & Landscape
            </p>
          </a>
          <a>
            <img src={umbrellas} alt="street_landscape" className="" />
          </a>
        </div>
      </div>
    </div>
  );
}
