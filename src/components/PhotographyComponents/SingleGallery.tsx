import {
  faDownload,
  faImage,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "@mui/material/Slider";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import PhotographyFooter from "./PhotographyFooter";
import PicturesContainer from "./PicturesContainer";

type SingleGalleryProps = {
  occasion_key: string;
  darkMode: any;
  title: string;
};

export default function SingleGallery({
  occasion_key,
  darkMode,
  title,
}: SingleGalleryProps) {
  const [resizeValue, setResizeValue] = React.useState(40);
  const [loadedImages, setLoadedImages] = React.useState([]);
  const [unloadedImages, setUnloadedImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [imagesList, setImagesList] = React.useState<any>({});
  const [clickedStates, setClickedStates] = React.useState([]);
  const [occasionObject, setOccasionObject] = React.useState({});
  const [errorPage, setErrorPage] = React.useState(false);

  const BASE_URL = "https://caesar-chin-photography.s3.amazonaws.com";

  React.useEffect(() => {
    fetch(`${BASE_URL}/${title}/index.json`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        var occasion_key_value_pair = {};
        if (occasion_key in data) {
          occasion_key_value_pair = { [occasion_key]: data[occasion_key] };
          setOccasionObject(occasion_key_value_pair);
        } else {
          setErrorPage(true);
        }
        let count = 0;
        for (let occasion_name in occasion_key_value_pair) {
          fetch(`${BASE_URL}/${title}/${occasion_name}/keys.json`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((images) => {
              count += 1;
              var temp_obj = {
                [occasion_name]: {
                  name: data[occasion_name],
                  images_list: images,
                },
              };
              if (count < 3) {
                setLoadedImages((prevArr: any) => [...prevArr, temp_obj]);
              } else {
                setUnloadedImages((prevArr: any) => [...prevArr, temp_obj]);
              }
              setImagesList((prevState: any) => ({
                ...prevState,
                ...temp_obj,
              }));

              setTimeout(() => {
                setLoading(false);
              }, 1000);
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    if (window.innerWidth < 770) {
      setResizeValue(100);
    }
  }, []);

  React.useEffect(() => {
    setClickedStates(loadedImages.map(() => false));
  }, [loadedImages]);

  React.useEffect(() => {
    console.log(occasionObject);
  }, [occasionObject]);

  const downloadZipFile = async (occasion_key: string, index: number) => {
    setClickedStates((prevState) => {
      const newClickedStates = [...prevState];
      newClickedStates[index] = true;
      return newClickedStates;
    });

    const fileUrl = `${BASE_URL}/${title}/${occasion_key}/${occasion_key}.zip`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${occasion_key}.zip`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setClickedStates((prevState) => {
        const newClickedStates = [...prevState];
        newClickedStates[index] = false;
        return newClickedStates;
      });
    }, 2000);
  };

  const handleResizeChange = (event: Event, newValue: number | number[]) => {
    setResizeValue(newValue as number);
  };

  const minResize = () => {
    setResizeValue(30);
  };

  const maxResize = () => {
    setResizeValue(100);
  };

  return (
    <div>
      {!errorPage ? (
        <div className="h-full">
          <ScrollToTop className="flex flex-row items-center justify-center rounded-full bg-sea-foam-green shadow-none dark:bg-dark-grayish-red" />

          {/* {title === "streetlandscape" ? (
        <div className="mb-12 flex justify-center whitespace-pre text-4xl uppercase tracking-widest">
          <div>Street</div>
          <div> & </div>
          <div>Landscape</div>
        </div>
      ) : (
        <div className="mb-12 flex justify-center text-5xl uppercase tracking-widest">
          Concert
        </div>
      )} */}

          <div className="mb-12 flex justify-center whitespace-pre text-4xl uppercase">
            {Object.values(occasionObject)}
          </div>

          <div>
            <div
              className={`mt-24 flex animate-pulse flex-col items-center justify-center transition-all duration-1500 
            ${loading ? "block opacity-100" : "hidden opacity-0"}
            `}
            >
              {/* Loader */}
              <div className="flex animate-pulse items-center justify-center space-x-2">
                <div
                  className="text-primary inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:border-dark-grayish-red dark:border-r-transparent"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`${
                loading ? "invisible opacity-0" : "visible opacity-100"
              } transition-all duration-1500`}
            >
              <div className="ml-4 flex flex-row justify-between">
                <div className="flex flex-row items-center justify-between">
                  <FontAwesomeIcon
                    icon={faImage}
                    onClick={minResize}
                    className="cursor-pointer text-lg hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
                  />

                  <Slider
                    style={{
                      width: "10rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                    value={resizeValue}
                    onChange={handleResizeChange}
                    aria-label="resize"
                    min={30}
                    max={100}
                    className="!text-sea-foam-green dark:!text-dark-grayish-red"
                  />

                  <FontAwesomeIcon
                    icon={faImage}
                    className="cursor-pointer text-3xl hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
                    onClick={maxResize}
                  />
                </div>
              </div>

              {loadedImages.map((occasion_key: React.Key, index: any) => {
                var occasion_name =
                  occasion_key[Object.keys(occasion_key)[0]]["name"];
                var occasion_name_parts = [];

                let arr = occasion_name.split(",");
                if (arr.length > 2) {
                  const secondCommaIndex = occasion_name.indexOf(
                    ",",
                    occasion_name.indexOf(",") + 1
                  );
                  occasion_name_parts = [
                    occasion_name.slice(0, secondCommaIndex),
                    occasion_name.slice(secondCommaIndex + 1).trim(),
                  ];
                } else if (arr.length === 2 && arr[1].charAt(0) === " ") {
                  occasion_name_parts[0] = arr[0];
                  occasion_name_parts[1] = arr[1].trim();
                }

                var images_list =
                  occasion_key[Object.keys(occasion_key)[0]]["images_list"];

                return (
                  <div
                    key={index}
                    className={`${loading ? "hidden" : "block"}`}
                  >
                    <div className="mt-8 flex w-auto flex-row items-center justify-between">
                      <div className="ml-4 flex w-auto flex-row items-center whitespace-pre">
                        <div className="flex flex-row max-md:flex-col ">
                          <div className="text-lg uppercase">
                            {occasion_name_parts[0]}
                          </div>
                          <div className="text-lg uppercase max-md:hidden">
                            {", "}
                          </div>
                          <div className="text-lg uppercase">
                            {occasion_name_parts[1]}
                          </div>
                        </div>
                      </div>

                      <div className="ml-4 flex w-full flex-row items-center border-white before:mr-4 before:flex-auto before:border-half before:content-[''] ">
                        <div className="relative ">
                          {clickedStates[index] ? (
                            <div className="transition-visibility visible flex cursor-pointer flex-row items-center opacity-100 transition-opacity duration-500 ease-in-out">
                              <div className="text-md mr-2 max-md:hidden">
                                THANK YOU
                              </div>
                              <FontAwesomeIcon
                                icon={faSmileBeam}
                                className="text-md max-md:text-2xl"
                              />
                            </div>
                          ) : (
                            <div
                              className="transition-visibility visible flex cursor-pointer flex-row items-center opacity-100 transition-opacity duration-500 ease-in-out"
                              onClick={() =>
                                downloadZipFile(
                                  Object.keys(occasion_key)[0],
                                  index
                                )
                              }
                            >
                              <div className="text-md mr-2 max-md:hidden">
                                DOWNLOAD COLLECTION
                              </div>
                              <FontAwesomeIcon
                                icon={faDownload}
                                className="text-md max-md:text-2xl"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        loading ? "hidden" : "block"
                      } transition-all duration-1500`}
                    >
                      <PicturesContainer
                        title={title}
                        resizeValue={resizeValue}
                        // handleImageLoad={handleImageLoad}
                        occasion={images_list}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <PhotographyFooter title={title} />
          </div>
        </div>
      ) : (
        <div>This page doesn't exist!</div>
      )}
    </div>
  );
}
