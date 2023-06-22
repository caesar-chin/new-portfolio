import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import AddingNewListItem from "./AddingNewListItem";

type OccasionDetails = {
  [key: string]: string;
};

type OccasionType = OccasionDetails & {
  selected: boolean;
};

type SelectedListType = {
  type: number | string;
  occasion: string;
  photo: string;
  details: boolean;
};

export default function EditingParent() {
  const [selectedList, setSelectedList] = React.useState<SelectedListType>({
    type: "",
    occasion: "",
    photo: "",
    details: false,
  });
  const [selectedListName, setSelectedListName] =
    React.useState<SelectedListType>({
      type: "",
      occasion: "",
      photo: "",
      details: false,
    });
  const [masterList, setMasterList] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [photoType, setPhotoType] = React.useState([
    { name: "Concert", selected: false },
    { name: "Street & Landscape", selected: false },
  ]);
  const [occasionList, setOccasionList] = React.useState<OccasionType[]>([]);
  const [photosList, setPhotosList] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [previousType, setPreviousType] = React.useState(null);

  const photoTypeKeys = ["concert", "streetlandscape"];

  React.useEffect(() => {
    // Update the previousType state whenever selectedListName.type changes
    setPreviousType(selectedListName.type);
  }, [selectedListName.type]);

  const downloadJsonFiles = async () => {
    const fetchData = async () => {
      await fetch(`${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMasterList(data.data);
        })
        .catch((err) => console.log(err));
    };

    fetchData().then(() => {
      setIsLoaded(true);
    });
  };

  React.useEffect(() => {
    const fetchDataAndSetLoaded = async () => {
      // Fetches concert JSON
      await downloadJsonFiles();
      setIsLoaded(true);
    };

    fetchDataAndSetLoaded();
  }, []);

  // React.useEffect(() => {
  //   console.log(Object.keys(masterList));
  // }, [masterList]);

  React.useEffect(() => {
    console.log(occasionList);
  }, [occasionList]);

  //Photo type is selected and shows the respected occasions
  const handlePhotoTypeSelect = (index: number) => {
    if (index !== selectedList.type) {
      setSelectedList((prevState) => {
        const newState = { ...prevState };
        newState.type = photoTypeKeys[index];
        newState.occasion = "";
        newState.photo = "";
        newState.details = false;
        return newState;
      });

      setSelectedListName((prevState) => {
        const newState = { ...prevState };
        newState.type = photoType[index].name;
        newState.occasion = "";
        newState.photo = "";
        newState.details = false;
        return newState;
      });

      setOccasionList([]);

      setPhotosList([]);
      setDetails({});
    }

    setPhotoType((prevState) => {
      const newState = [...prevState]; // create a new copy of the array
      for (let typeName of newState) {
        if (typeName.name === newState[index].name) {
          typeName.selected = true; // change the selected property of the item at the specified index
        } else {
          typeName.selected = false;
        }
      }
      return newState; // return the new array
    });

    let index_list = [];

    for (let concertOccasion in masterList[photoTypeKeys[index]]["index"]) {
      index_list.push({
        [concertOccasion]:
          masterList[photoTypeKeys[index]]["index"][concertOccasion],
        selected: false,
      });
    }

    setOccasionList(index_list);
  };

  const handleOccasionSelect = (
    occasion_obj_key: string,
    occasion_name: string
  ) => {
    if (occasion_obj_key !== selectedList.occasion) {
      setSelectedList((prevState) => {
        const newState = { ...prevState };
        newState.occasion = occasion_obj_key;
        newState.photo = "";
        newState.details = false;
        return newState;
      });

      console.log(occasionList);

      setSelectedListName((prevState) => {
        const newState = { ...prevState };
        newState.occasion = occasion_name;
        newState.photo = "";
        newState.details = false;
        return newState;
      });

      setPhotosList([]);
      setDetails({});
    }

    setOccasionList((prevState) => {
      const newState = [...prevState]; // create a new copy of the array
      for (let occasionName of newState) {
        if (occasion_obj_key === Object.keys(occasionName)[0]) {
          occasionName["selected"] = true;
        } else {
          occasionName["selected"] = false;
        }
      }
      return newState;
    });

    let photo_list = [];

    for (let concertPhoto of masterList[selectedList.type]["keys"][
      occasion_obj_key
    ]) {
      concertPhoto["selected"] = false;
      photo_list.push(concertPhoto);
    }

    setPhotosList(photo_list);
  };

  const handlePhotoSelect = (photo_obj_key: string, photo_details: any) => {
    if (photo_obj_key !== selectedList.photo) {
      setSelectedList((prevState) => {
        const newState = { ...prevState };
        newState.photo = photo_obj_key;
        newState.details = false;
        return newState;
      });

      setSelectedListName((prevState) => {
        const newState = { ...prevState };
        newState.photo = photo_obj_key;
        newState.details = false;
        return newState;
      });

      setDetails({});
    }

    setPhotosList((prevState) => {
      const newState = [...prevState]; // create a new copy of the array
      for (let occasionName of newState) {
        if (photo_obj_key === Object.keys(occasionName)[0]) {
          occasionName["selected"] = true;
        } else {
          occasionName["selected"] = false;
        }
      }
      return newState;
    });

    setSelectedList((prevState) => {
      const newState = { ...prevState };
      newState.details = true;
      return newState;
    });

    setDetails({
      caption: photo_details["caption"],
      date: photo_details["date"],
      url: photo_details["url"],
      webp_url: photo_details["webp_url"],
      artist: photo_details["artist"],
      venue: photo_details["venue"],
    });
  };

  const handleSelectedListForPhotoType = () => {
    setSelectedList((prevState) => {
      const newState = { ...prevState };
      newState.occasion = "";
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setSelectedListName((prevState) => {
      const newState = { ...prevState };
      newState.occasion = "";
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setOccasionList([]);
    setPhotosList([]);
    setDetails({});
  };

  const handleSelectedListForOccasion = () => {
    setSelectedList((prevState) => {
      const newState = { ...prevState };
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    console.log(occasionList);

    setSelectedListName((prevState) => {
      const newState = { ...prevState };
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setPhotosList([]);
    setDetails({});
  };

  // React.useEffect(() => {
  //   console.log(occasionList);
  // }, [occasionList]);

  // React.useEffect(() => {
  //   console.log(selectedList);
  // }, [selectedList]);

  if (!isLoaded) return <div className="mt-4">Loading...</div>;

  return (
    <div className="overflow-x-auto">
      <div className="flex h-8 flex-row overflow-x-auto">
        {selectedListName.type && (
          <div className="flex w-auto flex-row">
            <div
              onClick={handleSelectedListForPhotoType}
              className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
            >{`${selectedListName.type}`}</div>
            <div className="px-2">/</div>
          </div>
        )}
        {selectedListName.occasion && (
          <div className="flex flex-row ">
            <div
              onClick={handleSelectedListForOccasion}
              className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
            >{`${selectedListName.occasion}`}</div>
            <div className="px-2">/</div>
          </div>
        )}
        {
          <div className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red">
            {selectedListName.photo}
          </div>
        }
      </div>

      <div className="mt-2 flex flex-row ">
        {/* Photo Type */}
        <div className="flex flex-col items-stretch">
          {photoType.map((type, index) => {
            return (
              <div
                key={index}
                className={`${
                  type.selected &&
                  "text-sea-foam-green dark:text-dark-grayish-red"
                } mb-1 flex cursor-pointer flex-row items-center justify-between hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
                onClick={() => handlePhotoTypeSelect(index)}
              >
                <div className={`mr-4 text-lg`}>{type.name}</div>
                <div className="w-4">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    className={`${!type.selected && "hidden"} text-sm`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Occasions */}
        <div className="ml-4 flex flex-col items-stretch">
          {occasionList.map((occasion, index) => {
            var occasion_obj_key = Object.keys(occasion)[0];
            var occasion_name = occasion[occasion_obj_key];
            var occasion_selected = occasion[Object.keys(occasion)[1]];
            return (
              <div
                key={index}
                className={`${
                  occasion_selected &&
                  "text-sea-foam-green dark:text-dark-grayish-red"
                } mb-1 flex cursor-pointer flex-row items-center justify-between hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
                onClick={() => {
                  handleOccasionSelect(occasion_obj_key, occasion_name);
                }}
              >
                <div className={`mr-4 text-lg`}>{occasion_name}</div>

                <div className="w-4">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    className={`${!occasion_selected && "hidden"} text-sm`}
                  />
                </div>
              </div>
            );
          })}
          {occasionList.length > 0 &&
            selectedListName.type === previousType && (
              <AddingNewListItem
                typeName={selectedListName.type}
                occasionBool={true}
                downloadJsonFiles={downloadJsonFiles}
              />
            )}
        </div>

        {/* Photos */}
        <div className="ml-4 flex flex-col items-stretch">
          {photosList.map((photo, index) => {
            var photo_name = Object.keys(photo)[0];
            var photo_details = photo[photo_name];
            var photo_selected = photo["selected"];

            return (
              <div
                key={index}
                className={`${
                  photo_selected &&
                  "text-sea-foam-green dark:text-dark-grayish-red"
                } mb-1 flex cursor-pointer flex-row items-center justify-between hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
                onClick={() => {
                  handlePhotoSelect(photo_name, photo_details);
                }}
              >
                <div className={`mr-4 text-lg`}>{photo_name}</div>
              </div>
            );
          })}
        </div>

        {/* Photo Details */}
        <div className={`${!selectedList.details && "hidden"} ml-4`}>
          <div className="w-80">
            <img
              src={details["webp_url"]}
              alt={details["caption"]}
              className="h-full w-full"
            />
          </div>

          <div>Caption: {details["caption"]}</div>
          <div>Date: {details["date"]}</div>
          {/* <div>{details["url"]}</div> */}
          {selectedList.type === "concert" ? (
            <div>
              <div>Artist: {details["artist"]}</div>
              <div>Venue: {details["venue"]}</div>
            </div>
          ) : (
            <div>Place: {details["venue"]}</div>
          )}
        </div>
      </div>
    </div>
  );
}
