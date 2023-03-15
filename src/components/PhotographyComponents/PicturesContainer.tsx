import React, { useEffect } from "react";

type PicturesContainerType = {
  title: string;
  resizeValue: number;
  // handleImageLoad: any;
  occasion: any;
};

export default function PicturesContainer({
  title,
  resizeValue,
  // handleImageLoad,
  occasion,
}: PicturesContainerType) {
  return (
    <div>
      <div className={`flex flex-wrap justify-center mt-6 `}>
        {occasion.map((image: { [x: string]: any }, key: React.Key) => {
          var image_info = image[Object.keys(image)[0]];
          return (
            <img
              key={key}
              src={image_info["webp_url"]}
              className={`m-4 transition-all ease-in-out object-scale-down hover:opacity-25 cursor-pointer`}
              style={{
                height: "auto",
                width: `${resizeValue}%`,
              }}
              alt={image[Object.keys(image)[0]]}
              // onLoad={handleImageLoad}
            />
          );
        })}
      </div>
    </div>
  );
}
