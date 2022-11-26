import React from "react";
import Hermes from "../assets/hermes.png";
import Myntfinance from "../assets/original_myntfinance.png";
import ReactColors from "../assets/ReactColors.png";

export default function Projects() {
  return (
    <div>
      <div className="font-murecho font-extralight opacity-80">Projects</div>
      <div className="projectCard flex flex-row pt-5 pb-16">
        <div className="w-6/12 pr-4">
          <div className="text-4xl">Hermes</div>
          <div className="my-6 text-xl font-murecho">
            Hermes was created for the sole purpose to help users decide what
            food to eat and to help deliver those ingredients locally. These
            services will help ensure the safety and comfort of our users, while
            also supporting small businesses.
          </div>
        </div>
        <div className="w-6/12">
          <img src={Hermes} alt="hermes" className="rounded-xl" />
        </div>
      </div>

      <div className="projectCard flex flex-row py-5 pb-16">
        <div className="w-6/12 pr-4">
          <div className="text-4xl">mynt Finance</div>
          <div className="my-6 text-xl font-murecho">
            mynt Finance provides a platform to structure your investments by
            giving users easy to use tools and a slick, clean design.
          </div>
        </div>
        <div className="w-6/12">
          <img src={Myntfinance} alt="mynt Finance" className="rounded-xl" />
        </div>
      </div>

      <div className="projectCard flex flex-row py-5 pb-16">
        <div className="w-6/12 pr-4">
          <div className="text-4xl">React Color Picker</div>
          <div className="my-6 text-xl font-murecho">
            React Color Picker is an interactive website that shows different
            palettes of colors. The website allows you to see up to 20 different
            colors that fit well with a theme and create your own color
            palettes.
          </div>
        </div>
        <div className="w-6/12">
          <img src={ReactColors} alt="mynt Finance" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}
