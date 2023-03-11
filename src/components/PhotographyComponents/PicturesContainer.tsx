import React from "react";
import one from "../../assets/concert/L1020716.webp";
import two from "../../assets/concert/L1020726.webp";
import three from "../../assets/concert/L1020734.webp";
import four from "../../assets/concert/L1020735.webp";
import five from "../../assets/concert/L1020736.webp";
import six from "../../assets/concert/L1020741.webp";
import seven from "../../assets/concert/L1020742.webp";
import eight from "../../assets/concert/L1020764.webp";
import nine from "../../assets/concert/L1020765.webp";
import ten from "../../assets/concert/L1020770.webp";
import eleven from "../../assets/concert/L1020794.webp";
import twelve from "../../assets/concert/L1020795.webp";
import thirteen from "../../assets/concert/L1020799.webp";
import fourteen from "../../assets/concert/DSC02234.webp";

type PicturesContainerType = {
  title: string;
  resizeValue: number;
};

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
];

export default function PicturesContainer({
  title,
  resizeValue,
}: PicturesContainerType) {
  return (
    <div>
      <div className={`flex flex-wrap justify-center mt-6 `}>
        {images.map((image, key) => (
          <img
            key={key}
            src={image}
            className={`m-4 transition-all ease-in-out object-scale-down hover:opacity-25 cursor-pointer`}
            style={{
              height: "auto",
              width: `${resizeValue}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
