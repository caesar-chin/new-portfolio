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
  const [occasionKeysList, setOccasionKeysList] = React.useState<any>(
    [] as any
  );
  const [occasionValuesList, setOccasionValuesList] = React.useState<any>(
    [] as any
  );
  const [indexList, setIndexList] = React.useState<any>({} as any);
  const [loading, setLoading] = React.useState(true);
  const [imagesList, setImagesList] = React.useState<any>([] as any);

  //Small changes

  // useEffect(() => {
  //   console.log(imagesList);
  // }, [imagesList]);

  useEffect(() => {
    fetch(
      "https://caesar-chin-photography.s3.amazonaws.com/concert/index.json",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        for (let occasion_name in data) {
          fetch(
            `https://caesar-chin-photography.s3.amazonaws.com/concert/${occasion_name}/keys.json`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
            .then((response) => response.json())
            .then((images) => {
              var temp_obj = {
                [occasion_name]: {
                  name: data[occasion_name],
                  images_list: images,
                },
              };
              setImagesList((prevArr: any) => [...prevArr, temp_obj]);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (window.innerWidth < 770) {
      setResizeValue(100);
    }
  }, []);

  // const handleImageLoad = () => {
  //   Promise.all(
  //     Object.values(imagesList).map((collection) => {
  //       Promise.all(
  //         collection[Object.keys(collection)[0]]["images_list"].map(
  //           (image: any) => {
  //             Promise.all(
  //               Object.values(image).map((image_info: any) => {
  //                 return new Promise((resolve) => {
  //                   const img = new Image();
  //                   img.src = image_info["webp_url"];
  //                   img.onload = resolve;
  //                 });
  //               })
  //             );
  //           }
  //         )
  //       );
  //     })
  //   ).then(() => {
  //     setLoading(false);
  //   });
  // };

  const handleResizeChange = (event: Event, newValue: number | number[]) => {
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
    <div className="h-full">
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
      >
        {expanded ? (
          <div className="text-black">
            This website is still in construction
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div>
        <div
          className={`flex flex-col items-center justify-center mt-24 transition-opacity duration-1500 animate-pulse 
            ${loading ? "opacity-100 block" : "opacity-0 hidden"}
            `}
        >
          {/* Loader */}

          <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div
              className="inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid dark:border-dark-grayish-red border-black border-r-transparent dark:border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </div>

        <div>
          {imagesList.map((occasion_key: React.Key, index: any) => {
            var occasion_name_parts =
              occasion_key[Object.keys(occasion_key)[0]]["name"].split(", ");

            var images_list =
              occasion_key[Object.keys(occasion_key)[0]]["images_list"];

            return (
              <div
                key={index}
                className={`${
                  loading ? "opacity-0" : "opacity-100"
                } transition-opacity duration-1000`}
              >
                <div className="mt-8 flex flex-row w-auto justify-between items-center">
                  <div className="flex flex-row w-auto whitespace-pre items-center ml-4">
                    <div className="flex flex-row max-md:flex-col ">
                      <div className="uppercase text-lg">
                        {occasion_name_parts[0]}
                      </div>
                      <div className="uppercase text-lg max-md:hidden">
                        {", "}
                      </div>
                      <div className="uppercase text-lg">
                        {occasion_name_parts[1]}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex flex-row w-full items-center before:flex-auto before:border-half before:content-[''] border-white before:mr-4">
                    <div className="cursor-pointer flex flex-row w-auto items-center">
                      <div className="mr-2 max-md:hidden text-md">
                        DOWNLOAD COLLECTION
                      </div>
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="text-md max-md:text-2xl"
                      />
                    </div>
                  </div>
                </div>

                <div className={loading ? "hidden" : "block"}>
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
    </div>
  );
}
