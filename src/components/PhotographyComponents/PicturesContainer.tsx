import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes as xmark,
  faArrowLeft,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import DownloadStatus from "./DownloadStatus";
import { useSwipeable } from "react-swipeable";

type PicturesContainerType = {
  title: string;
  resizeValue: number;
  occasion: any;
};

export default function PicturesContainer({
  title,
  resizeValue,
  occasion,
}: PicturesContainerType) {
  const [fullscreenImage, setFullscreenImage] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isDownloading, setIsDownloading] = React.useState("");

  const handleSwiping = (direction) => {
    if (direction === "Left") {
      handleRightArrowClick();
    } else if (direction === "Right") {
      handleLeftArrowClick();
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwiping("Left"),
    onSwipedRight: () => handleSwiping("Right"),
    delta: 10,
    trackMouse: true,
  });

  const fetchNewImage = async (imageUrl: string, index: any) => {
    setFullscreenImage(imageUrl);
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleImageClick = async (imageUrl: string, index: any) => {
    await fetchNewImage(imageUrl, index);
    toggleFullscreen();
  };

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const image = occasion[newIndex];
      const image_info = image[Object.keys(image)[0]];
      setFullscreenImage(image_info["webp_url"]);
      setCurrentIndex(newIndex);
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex < occasion.length - 1) {
      const newIndex = currentIndex + 1;
      const image = occasion[newIndex];
      const image_info = image[Object.keys(image)[0]];
      setFullscreenImage(image_info["webp_url"]);
      setCurrentIndex(newIndex);
    }
  };

  const handleChangeDownloadStatus = (status: string) => {
    setIsDownloading(status);
  };

  const handleDownloadClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    handleChangeDownloadStatus("downloading");
    const image = occasion[currentIndex];
    const image_info = image[Object.keys(image)[0]];

    try {
      const response = await fetch(image_info["url"]);
      if (!response.ok) {
        throw new Error("Failed to fetch the image");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = Object.keys(image)[0]; // you can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        URL.revokeObjectURL(url);
        handleChangeDownloadStatus("completed");
      }, 100);
      setTimeout(() => {
        handleChangeDownloadStatus("");
      }, 7500);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (
      e.target === e.currentTarget ||
      e.target === document.querySelector(".fullscreen-image")
    ) {
      toggleFullscreen();
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isFullscreen) {
      toggleFullscreen();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <div>
      <div className={`mt-6 flex flex-wrap justify-center `}>
        {occasion.map((image: { [x: string]: any }, key: React.Key) => {
          var image_info = image[Object.keys(image)[0]];
          return (
            <img
              key={key}
              src={image_info["webp_url"]}
              className={`m-4 cursor-pointer object-scale-down transition-all ease-in-out hover:opacity-25`}
              style={{
                height: "auto",
                width: `${resizeValue}%`,
              }}
              alt={image[Object.keys(image)[0]]}
              onClick={() => {
                handleImageClick(image_info["webp_url"], key);
              }}
            />
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 z-50 m-4 text-white">
        <DownloadStatus isDownloading={isDownloading} />
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative h-screen w-screen">
            <div
              className="border absolute inset-0 flex items-center justify-center "
              onClick={handleBackgroundClick}
              {...swipeHandlers}
            >
              <img
                src={fullscreenImage}
                alt="Fullscreen"
                className="fullscreen-image absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                onClick={handleContentClick}
                draggable={false}
              />
            </div>

            <button
              className="absolute right-0 top-0 m-4 text-gray-800 focus:outline-none"
              onClick={toggleFullscreen}
            >
              <FontAwesomeIcon
                icon={xmark}
                className="text-2xl text-white hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red "
              />
            </button>

            {currentIndex === 0 ? (
              <div></div>
            ) : (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-800 focus:outline-none"
                onClick={handleLeftArrowClick}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-2xl text-white hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red "
                />
              </button>
            )}

            {currentIndex === occasion.length - 1 ? (
              <div></div>
            ) : (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-800 focus:outline-none"
                onClick={handleRightArrowClick}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-2xl text-white hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red "
                />
              </button>
            )}

            <a
              href={fullscreenImage}
              download
              onClick={handleDownloadClick}
              className="absolute bottom-0 right-0 m-4 flex items-center text-gray-800 hover:!text-sea-foam-green focus:outline-none dark:hover:!text-dark-grayish-red"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="text-2xl text-white hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red "
              />
            </a>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform p-4 text-center text-white">
              {`${
                occasion[currentIndex][Object.keys(occasion[currentIndex])[0]][
                  "caption"
                ]
              }, ${
                occasion[currentIndex][Object.keys(occasion[currentIndex])[0]][
                  "date"
                ]
              }`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
