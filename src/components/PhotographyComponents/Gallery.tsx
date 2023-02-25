import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import SortIcon from "@mui/icons-material/Sort";
import Stack from "@mui/material/Stack";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PicturesContainer from "./PicturesContainer";
import ScrollButton from "./ScrollButton";
import ScrollToTop from "react-scroll-to-top";

type GalleryProps = {
  darkMode: any;
  title: string;
};

// "dark-grayish-red": "#b24a43",
// "sea-foam-green": "#A5DEC8",

export default function Gallery({ darkMode, title }: GalleryProps) {
  const [resizeValue, setResizeValue] = React.useState(40);
  const [expanded, setExpanded] = React.useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 770) {
  //     setResizeValue(100);
  //   }
  // }, []);

  const handleResizeChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue);
    setResizeValue(newValue as number);
  };

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  const minResize = () => {
    setResizeValue(30);
  };

  const maxResize = () => {
    setResizeValue(100);
  };

  return (
    <div>
      <ScrollToTop className="dark:bg-dark-grayish-red bg-sea-foam-green flex flex-row justify-center items-center shadow-none rounded-full" />
      {title === "streetlandscape" ? (
        <div className="text-4xl uppercase tracking-widest flex justify-center mb-12">
          <div suppressHydrationWarning>Street{"\u00A0"}</div>
          <div>&</div>
          <div suppressHydrationWarning>{"\u00A0"}Landscape</div>
        </div>
      ) : (
        <div className="text-5xl uppercase tracking-widest flex justify-center mb-12">
          Concert
        </div>
      )}

      <div className="flex flex-row justify-between ">
        <button className="cursor-pointer" onClick={handleExpanded}>
          <SortIcon
            style={{ fontSize: "1.875rem", lineHeight: "2.5rem" }}
            className={`dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green  ${
              expanded && "dark:!text-dark-grayish-red !text-sea-foam-green"
            }`}
          />
        </button>
        <div className="flex flex-row justify-between items-center">
          <PhotoSizeSelectActualIcon
            onClick={minResize}
            style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
            className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer"
          />

          <Slider
            style={{ width: "10rem", marginLeft: "1rem", marginRight: "1rem" }}
            value={resizeValue}
            onChange={handleResizeChange}
            aria-label="resize"
            min={30}
            max={100}
            className="dark:!text-dark-grayish-red !text-sea-foam-green"
          />

          <PhotoSizeSelectActualIcon
            style={{ fontSize: "1.875rem", lineHeight: "2.5rem" }}
            className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer"
            onClick={maxResize}
          />
        </div>
      </div>

      <PicturesContainer
        title={title}
        resizeValue={resizeValue}
        expanded={expanded}
      />
    </div>
  );
}
