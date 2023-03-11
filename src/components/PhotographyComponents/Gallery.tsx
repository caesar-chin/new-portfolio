import React, { useEffect } from "react";
import PicturesContainer from "./PicturesContainer";
import Slider from "@mui/material/Slider";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faBars, faDownload } from "@fortawesome/free-solid-svg-icons";

type GalleryProps = {
  darkMode: any;
  title: string;
};

// "dark-grayish-red": "#b24a43",
// "sea-foam-green": "#A5DEC8",

export default function Gallery({ darkMode, title }: GalleryProps) {
  const [resizeValue, setResizeValue] = React.useState(40);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth < 770) {
      setResizeValue(100);
    }
  }, []);

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
        <div className="text-4xl whitespace-pre uppercase tracking-widest flex justify-center mb-12">
          <div>Street</div>
          <div> & </div>
          <div>Landscape</div>
        </div>
      ) : (
        <div className="text-5xl uppercase tracking-widest flex justify-center mb-12">
          Concert
        </div>
      )}

      <div className="flex flex-row justify-between ">
        <button className="cursor-pointer" onClick={handleExpanded}>
          <FontAwesomeIcon
            icon={faBars}
            className={`dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-3xl ${
              expanded && "dark:!text-dark-grayish-red !text-sea-foam-green"
            }`}
          />
        </button>
        <div className="flex flex-row justify-between items-center">
          <FontAwesomeIcon
            icon={faImage}
            onClick={minResize}
            className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer text-lg"
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

          <FontAwesomeIcon
            icon={faImage}
            className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer text-3xl"
            onClick={maxResize}
          />
        </div>
      </div>

      <div
        id="expanded-menu"
        style={{ transition: "all 0.5s ease-in-out", height: 0 }}
        className={
          expanded
            ? "transition-all duration-500 ease-in-out mt-4 h-32 w-full bg-white border-[2px] border-black border-solid rounded dark:border-[0px]"
            : undefined
        }
      ></div>

      <div className="mt-8 flex flex-row w-auto justify-between items-center">
        <div className="flex flex-row w-auto whitespace-pre items-center ml-4">
          <div className="flex flex-row max-md:flex-col ">
            <div className="text-lg">{"ERNEST RAREBERGG"}</div>
            <div className="text-lg max-md:hidden">{" , "}</div>
            <div className="text-lg">{"BABY'S ALL RIGHT"}</div>
          </div>
        </div>
        <div className="ml-4 flex flex-row w-full items-center before:flex-auto before:border-half before:content-[''] border-white before:mr-4">
          <div className="cursor-pointer flex flex-row w-auto items-center">
            <div className="mr-2 max-md:hidden text-lg">
              DOWNLOAD COLLECTION
            </div>
            <FontAwesomeIcon icon={faDownload} className="text-lg" />
          </div>
        </div>
      </div>

      <PicturesContainer title={title} resizeValue={resizeValue} />
    </div>
  );
}
