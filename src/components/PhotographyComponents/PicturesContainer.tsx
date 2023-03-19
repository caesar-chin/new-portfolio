import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes as xmark,
  faArrowLeft,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

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
  const [originalImage, setOriginalImage] = useState("");
  const [originalImageName, setOriginalImageName] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

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

  const handleDownloadClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(originalImage);
      if (!response.ok) {
        throw new Error("Failed to fetch the image");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = originalImageName; // you can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
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
              onClick={() => {
                setOriginalImageName(Object.keys(image)[0]);
                setOriginalImage(image_info["url"]);
                handleImageClick(image_info["webp_url"], key);
              }}
            />
          );
        })}
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick}
        >
          <div
            className="relative w-screen h-screen"
            onClick={handleContentClick}
          >
            <div className="absolute inset-0 flex items-center justify-center border">
              <img
                src={fullscreenImage}
                alt="Fullscreen"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            <button
              className="absolute top-0 right-0 m-4 text-gray-800 focus:outline-none"
              onClick={toggleFullscreen}
            >
              <FontAwesomeIcon
                icon={xmark}
                className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "
              />
            </button>
            {currentIndex === 0 ? (
              <div></div>
            ) : (
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 focus:outline-none"
                onClick={handleLeftArrowClick}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "
                />
              </button>
            )}
            {currentIndex === occasion.length - 1 ? (
              <div></div>
            ) : (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 focus:outline-none"
                onClick={handleRightArrowClick}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "
                />
              </button>
            )}
            <a
              href={fullscreenImage}
              download
              onClick={handleDownloadClick}
              className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-gray-800 absolute bottom-0 right-0 m-4 focus:outline-none flex items-center"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
