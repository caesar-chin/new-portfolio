import React from "react";
import cherryblossom from "../../assets/cherryblossom.png";
import cherryblossomtwopeople from "../../assets/cherryblossomtwopeople.png";
import ferriswheel from "../../assets/ferriswheel.png";
import onetwofive from "../../assets/onetwofive.png";
import penn from "../../assets/penn.png";
import seattle from "../../assets/seattle.png";
import umbrellas from "../../assets/umbrellas.png";
import washingtonuniversity from "../../assets/washingtonuniversity.png";

type PicturesContainerType = {
  title: string;
  resizeValue: number;
  expanded: Boolean;
};

export default function PicturesContainer({
  title,
  resizeValue,
  expanded,
}: PicturesContainerType) {
  return (
    <div>
      <div
        id="expanded-menu"
        style={{ transition: "all 0.5s ease-in-out", height: 0 }}
        className={
          expanded
            ? "transition-all duration-500 ease-in-out mt-4 h-32 w-full bg-white border-[2px] border-black border-solid rounded dark:border-[0px]"
            : undefined
        }
      ></div>
      
      <div className={`flex flex-wrap justify-center mt-6`}>
        <img
          src={cherryblossom}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={cherryblossomtwopeople}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={ferriswheel}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={onetwofive}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={penn}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={seattle}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={washingtonuniversity}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
        <img
          src={umbrellas}
          className={`m-4 transition-all duration-500 ease-in-out`}
          style={{
            objectFit: "cover",
            height: "auto",
            width: `${resizeValue}%`,
          }}
        />
      </div>
    </div>
  );
}
