import React from "react";
import Hermes from "../../assets/Hermes.webp";
import Myntfinance from "../../assets/original_myntfinance.webp";
import ReactColors from "../../assets/ReactColors.webp";

export default function Projects() {
  return (
    <div>
      <div className="font-murecho font-extralight opacity-80">Projects</div>
      <div className="projectCard flex flex-row pt-4 pb-20 max-lg:flex-col">
        <div className="h-auto w-6/12 pr-4 max-lg:w-auto">
          <div className="text-4xl">Hermes</div>
          <div className="my-4 font-murecho text-xl">
            Hermes was created for the sole purpose to help users decide what
            food to eat and to help deliver those ingredients locally. These
            services will help ensure the safety and comfort of our users, while
            also supporting small businesses.
          </div>

          <div className="mb-6">
            <div className="flex flex-row">
              <a href="https://hermesfood.herokuapp.com/" target="_blank">
                <button className="mt-4 mr-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red">
                  Visit
                </button>
              </a>

              <a href="https://github.com/caesar-chin/Hermes/" target="_blank">
                <button className="mt-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-6/12 max-lg:w-auto">
          <img src={Hermes} alt="hermes" className="rounded-xl" />
        </div>
      </div>

      <div className="projectCard flex flex-row pt-4 pb-20 max-lg:flex-col">
        <div className="w-6/12 pr-4 max-lg:w-auto">
          <div className="text-4xl">mynt Finance</div>
          <div className="my-4 font-murecho text-xl">
            mynt Finance provides a platform to structure your investments by
            giving users easy to use tools and a slick, clean design.
          </div>

          <div className="mb-6">
            <div className="flex flex-row">
              <a href="https://myntfin.netlify.app/#/" target="_blank">
                <button className="mt-4 mr-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red">
                  Visit
                </button>
              </a>

              <a
                href="https://github.com/caesar-chin/myntFinance_2021/"
                target="_blank"
              >
                <button className="mt-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-6/12 max-lg:w-auto">
          <img src={Myntfinance} alt="mynt Finance" className="rounded-xl" />
        </div>
      </div>

      <div className="projectCard flex flex-row py-5 pb-20 max-lg:flex-col">
        <div className="w-6/12 pr-4 max-lg:w-auto">
          <div className="text-4xl">React Color Picker</div>
          <div className="my-4 font-murecho text-xl">
            React Color Picker is an interactive website that shows different
            palettes of colors. The website allows you to see up to 20 different
            colors that fit well with a theme and create your own color
            palettes.
          </div>

          <div className="mb-6">
            <div className="flex flex-row">
              <a
                href="https://react-colors-picker.netlify.app/"
                target="_blank"
              >
                <button className="mt-4 mr-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red">
                  Visit
                </button>
              </a>

              <a
                href="https://github.com/caesar-chin/ReactColorPicker"
                target="_blank"
              >
                <button className="mt-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-6/12 max-lg:w-auto">
          <img src={ReactColors} alt="mynt Finance" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}
