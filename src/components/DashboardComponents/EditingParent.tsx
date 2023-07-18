import {
  faArrowsRotate,
  faCheck,
  faTrash,
  faX,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OccasionList from "./OccasionList";
import PhotoDetails from "./PhotoDetails";
import PhotoList from "./PhotoList";
import PhotoTypeList from "./PhotoTypeList";
import UploadModule from "./UploadModule";
import "../../styles/tailwind-animations.css";

type SelectedListType = {
  type: any;
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
  const [occasionList, setOccasionList] = React.useState([]);
  const [photosList, setPhotosList] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [previousType, setPreviousType] = React.useState(null);
  const [listAcceptedFiles, setListAcceptedFiles] = React.useState([
    // {
    //   path: "8369703101.png",
    //   preview:
    //     "blob:http://localhost:3000/70167ba7-85b1-4b64-a608-7d251cf85009",
    //   name: "8369703101.png",
    // },
  ]);
  const [showUploadModule, setShowUploadModule] = React.useState(false);

  const [showDelete, setShowDelete] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);

  const [deleteObject, setDeleteObject] = React.useState({
    occasion: [],
    photos: [],
  });

  const [saveSuccess, setSaveSuccess] = React.useState(false);

  const photoTypeKeys = ["concert", "streetlandscape"];

  // React.useEffect(() => {
  //   console.log(deleteObject);
  // }, [deleteObject]);

  // React.useEffect(() => {
  //   console.log(occasionList);
  // }, [occasionList]);

  React.useEffect(() => {
    // Update the previousType state whenever selectedListName.type changes
    setPreviousType(selectedListName.type);
  }, [selectedListName.type]);

  const displayAcceptedFiles = (acceptedFiles: any[]) => {
    setListAcceptedFiles(acceptedFiles);
    setShowUploadModule(true);
  };

  const removePhotoFromListAcceptedFiles = (index: number) => {
    setListAcceptedFiles((prevArray) =>
      prevArray.filter((item, i) => i !== index)
    );
  };

  const handleUploadModule = (show: boolean) => {
    setShowUploadModule(show);
  };

  const addingMorePhotosToListAcceptedFiles = (acceptedFiles: any[]) => {
    setListAcceptedFiles((prevItems) => {
      // Separate new items into those that are unique and those that are duplicates
      const uniqueItems = [];
      const duplicateItems = [];

      acceptedFiles.forEach((newItem) => {
        if (prevItems.some((prevItem) => prevItem.name === newItem.name)) {
          duplicateItems.push(newItem);
        } else {
          uniqueItems.push(newItem);
        }
      });

      // Console log the names of the duplicate items
      duplicateItems.forEach((duplicateItem) =>
        console.log(duplicateItem.name)
      );

      // Add the new unique items to the end of the array
      return [...prevItems, ...uniqueItems];
    });
  };

  const downloadJsonFiles = async () => {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`, {
      method: "GET",
      credentials: "include",
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

  const handleRefresh = async () => {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`, {
      method: "GET",
      credentials: "include",
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

  const selectNewOccasion = (
    occasion_name: string,
    occasion_obj_key: string
  ) => {
    setSelectedList((prevState) => {
      const newState = { ...prevState };
      newState.occasion = occasion_obj_key;
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setSelectedListName((prevState) => {
      const newState = { ...prevState };
      newState.occasion = occasion_name;
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    console.log("occasion selected");
  };

  React.useEffect(() => {
    const fetchDataAndSetLoaded = async () => {
      // Fetches concert JSON
      const fetchData = async () => {
        await fetch(
          `${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
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

    fetchDataAndSetLoaded();
  }, []);

  //If anything is added to the list
  React.useEffect(() => {
    if (
      !!selectedList.type &&
      !!selectedList.occasion &&
      !!selectedListName.occasion &&
      !selectedList.photo
    ) {
      handleUpdateToDOM(
        photoTypeKeys.indexOf(selectedList.type),
        selectedList.occasion,
        selectedListName.occasion
      );
    }
  }, [masterList]);

  const handleUpdateToDOM = (
    index: number,
    occasion_obj_key: string,
    occasion_name: string
  ) => {
    setSelectedList((prevState) => {
      const newState = { ...prevState };
      newState.type = photoTypeKeys[index];
      newState.occasion = occasion_obj_key;
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setSelectedListName((prevState) => {
      const newState = { ...prevState };
      newState.type = photoType[index].name;
      newState.occasion = occasion_name;
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setDetails({});

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
        selected: false || concertOccasion === occasion_obj_key,
        deleted_selected: false,
      });
    }

    setOccasionList(index_list);

    let photo_list = [];

    for (let concertPhoto of masterList[selectedList.type]["keys"][
      occasion_obj_key
    ]) {
      concertPhoto["selected"] = false;
      photo_list.push(concertPhoto);
    }

    setPhotosList(photo_list);
  };

  // React.useEffect(() => {
  //   console.log(occasionList);
  // }, [occasionList]);

  //Photo type is selected and shows the respected occasions
  const handlePhotoTypeSelect = async (index: number) => {
    if (photoTypeKeys[index] !== selectedList.type) {
      setDeleteObject({
        occasion: [],
        photos: [],
      });
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
          deleted_selected: false,
        });
      }

      setOccasionList(index_list);
      setPhotosList([]);
      setDetails({});
    }
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

  const handlePhotoSelect = (photo_obj_key: string, photo_details: string) => {
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

    setSelectedListName((prevState) => {
      const newState = { ...prevState };
      newState.photo = "";
      newState.details = false;
      return newState;
    });

    setPhotosList([]);
    setDetails({});
  };

  const addOccasionDeleteObject = (index: number, new_object: any) => {
    setOccasionList((prevState) => {
      const newState = [...prevState];
      newState[index]["deleted_selected"] = true;
      return newState;
    });
    // console.log(new_object);
    setDeleteObject((prevState) => ({
      ...prevState,
      occasion: [...prevState.occasion, new_object],
    }));
  };

  const removeOccasionDeleteObject = (index: number, objectToRemove: any) => {
    setDeleteObject((prevState) => ({
      ...prevState,
      occasion: prevState.occasion.filter((obj) => {
        // Get the key of the current object
        const key = Object.keys(obj)[0];

        // Get the value of the current object
        const value = obj[key];

        // Get the key and value of the objectToRemove
        const keyToRemove = Object.keys(objectToRemove)[0];
        const valueToRemove = objectToRemove[keyToRemove];

        // Only keep the objects whose key and value don't match those of objectToRemove
        return !(key == keyToRemove && value == valueToRemove);
      }),
    }));

    setOccasionList((prevState) => {
      const newState = [...prevState];
      newState[index]["deleted_selected"] = false;
      return newState;
    });
  };

  const addPhotoDeleteObject = (type_occasion: string, photo_name: string) => {
    setDeleteObject((prevState) => {
      const { occasion, photos } = prevState;

      const existingPhotoIndex = photos.findIndex(
        (photo) => Object.keys(photo)[0] === type_occasion
      );

      let newPhotos;

      if (existingPhotoIndex !== -1) {
        newPhotos = [...photos];
        newPhotos[existingPhotoIndex][type_occasion] = [
          ...newPhotos[existingPhotoIndex][type_occasion],
          photo_name,
        ];
      } else {
        newPhotos = [...photos, { [type_occasion]: [photo_name] }];
      }

      return {
        occasion,
        photos: newPhotos,
      };
    });
  };

  const deletePhotoDeleteObject = (
    type_occasion: string,
    photo_name: string
  ) => {
    setDeleteObject((prevState) => {
      const newState = { ...prevState };
      const photosArray = newState.photos;

      // Find the index of the object that has the type_occasion key
      const index = photosArray.findIndex((photoObj) =>
        photoObj.hasOwnProperty(type_occasion)
      );

      // If such an object exists
      if (index !== -1) {
        // Get the array of photo names for this type_occasion
        const photoNames = photosArray[index][type_occasion];

        // Find the index of the photo_name in this array
        const photoIndex = photoNames.indexOf(photo_name);

        // If photo_name is found
        if (photoIndex !== -1) {
          // Remove photo_name from the array
          photoNames.splice(photoIndex, 1);

          // If the array becomes empty
          if (photoNames.length === 0) {
            // Remove the object from the photosArray
            photosArray.splice(index, 1);
          }
        }
      }

      return newState;
    });
  };

  const handleDeleteOccasions = async () => {
    var occasion_list = deleteObject.occasion.map((obj) => Object.values(obj)[0]);
    console.log(deleteObject.occasion.map((obj) => Object.values(obj)[0]))
    await fetch(`${import.meta.env.PUBLIC_API_URL}/delete_occasions`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ occasion: occasion_list }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data["success"]) {
          console.log("There has been an error: ");
          console.log(data["error"]);
        } else if (data["success"]) {
          console.log(data);
          setDeleteObject((prevState) => ({
            ...prevState,
            occasion: [],
          }));
          return true;
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeletePhotos = async () => {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/delete_files`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keys: deleteObject.photos }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data["success"]) {
          console.log("There has been an error: ");
          console.log(data["error"]);
        } else if (data["success"]) {
          console.log(data);
          setDeleteObject((prevState) => ({
            ...prevState,
            photos: [],
          }));
          return true;
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteButton = async () => {
    if (deleteObject.occasion.length > 0) {
      await handleDeleteOccasions();
    }

    if (deleteObject.photos.length > 0) {
      await handleDeletePhotos();
    }

    await fetch(`${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMasterList(data.data);
        let master_list = data.data;
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

        setDetails({});

        let index_list = [];

        for (let concertOccasion in master_list[selectedList["type"]][
          "index"
        ]) {
          index_list.push({
            [concertOccasion]:
              master_list[selectedList["type"]]["index"][concertOccasion],
            selected: false,
            deleted_selected: false,
          });
        }

        setOccasionList(index_list);
      })
      .catch((err) => console.log(err));
  };

  const handleOccasionInputChange = async (
    old_name: string,
    new_name_object: any
  ) => {
    var fetch_body = {
      path: `${selectedList.type}/${old_name}`,
      new_path: `${selectedList.type}/${Object.keys(new_name_object)[0]}`,
      new_occasion_name: new_name_object[Object.keys(new_name_object)[0]],
    };

    await fetch(`${import.meta.env.PUBLIC_API_URL}/edit_occasion_name`, {
      method: "PUT",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetch_body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data["success"]) {
          console.log("There has been an error: ");
          console.log(data["error"]);
        } else if (data["success"]) {
          console.log(data);
          fetch(`${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setMasterList(data.data);
              let master_list = data.data;
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

              setDetails({});

              let index_list = [];

              for (let concertOccasion in master_list[selectedList["type"]][
                "index"
              ]) {
                index_list.push({
                  [concertOccasion]:
                    master_list[selectedList["type"]]["index"][concertOccasion],
                  selected: false,
                  deleted_selected: false,
                });
              }

              setOccasionList(index_list);

              setSaveSuccess(true);
              setTimeout(() => {
                setSaveSuccess(false);
              }, 7500);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDetailInputChange = async (
    artist: string,
    caption: string,
    date: string,
    venue: string
  ) => {
    var fetch_body = {
      path: {
        [`${selectedList.type}/${selectedList.occasion}/${selectedList.photo}`]:
          { artist: artist, caption: caption, date: date, venue: venue },
      },
    };

    await fetch(`${import.meta.env.PUBLIC_API_URL}/edit_details`, {
      method: "PUT",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetch_body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data["success"]) {
          console.log("There has been an error: ");
          console.log(data["error"]);
        } else if (data["success"]) {
          console.log(data);
          fetch(`${import.meta.env.PUBLIC_API_URL}/get_index_and_key_json`, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setMasterList(data.data);
              let master_list = data.data;
              // setSelectedList((prevState) => {
              //   const newState = { ...prevState };
              //   newState.occasion = "";
              //   newState.photo = "";
              //   newState.details = false;
              //   return newState;
              // });

              // setSelectedListName((prevState) => {
              //   const newState = { ...prevState };
              //   newState.occasion = "";
              //   newState.photo = "";
              //   newState.details = false;
              //   return newState;
              // });

              let index_list = [];

              for (let concertOccasion in master_list[selectedList["type"]][
                "index"
              ]) {
                index_list.push({
                  [concertOccasion]:
                    master_list[selectedList["type"]]["index"][concertOccasion],
                  selected: false || selectedList.occasion === concertOccasion,
                  deleted_selected: false,
                });
              }

              setOccasionList(index_list);

              setPhotosList((prevState) => {
                const newState = [...prevState]; // create a new copy of the array
                for (let occasionName of newState) {
                  if (selectedList.photo === Object.keys(occasionName)[0]) {
                    occasionName["selected"] = true;
                  } else {
                    occasionName["selected"] = false;
                  }
                }
                return newState;
              });

              const keysArray =
                master_list[selectedList["type"]]["keys"][
                  selectedList["occasion"]
                ];
              const detailObject = keysArray.find(
                (obj: any) => selectedList["photo"] in obj
              )[selectedList["photo"]];

              setDetails({
                caption: detailObject["caption"],
                date: detailObject["date"],
                url: detailObject["url"],
                webp_url: detailObject["webp_url"],
                artist: detailObject["artist"],
                venue: detailObject["venue"],
              });

              setSaveSuccess(true);
              setTimeout(() => {
                setSaveSuccess(false);
              }, 7500);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    console.log(selectedList);
  }, [selectedList]);

  if (!isLoaded) return <div className="mt-4">Loading...</div>;

  return (
    <div className="overflow-x-auto">
      {/* Navbar */}
      <div className="flex h-8 w-max flex-row items-center overflow-x-auto">
        <FontAwesomeIcon
          onClick={handleRefresh}
          icon={faArrowsRotate}
          className="mr-2 cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        />
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
      {/* Handle Delete And Edit */}
      <div className="flex flex-row">
        <div className="mt-2 flex w-24 flex-row items-center gap-4">
          <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
            onClick={() => setShowDelete(!showDelete)}
          />
          {showDelete && (
            <div className="flex flex-row items-center gap-2">
              <FontAwesomeIcon
                icon={faCheck}
                className={`${
                  deleteObject.occasion.length !== 0 ||
                  deleteObject.photos.length !== 0
                    ? "cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                    : "text-gray-500"
                } text-xl`}
                onClick={handleDeleteButton}
              />
              <FontAwesomeIcon
                icon={faX}
                className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                onClick={() => setShowDelete(false)}
              />
            </div>
          )}
        </div>

        <div className="mt-2 flex h-8 flex-row items-center gap-4">
          <FontAwesomeIcon
            icon={faPenSquare}
            className={`${
              showEdit && "text-sea-foam-green dark:text-dark-grayish-red"
            } cursor-pointer text-lg hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
            onClick={() => setShowEdit(!showEdit)}
          />
        </div>
      </div>
      <div className="mt-2 flex flex-row ">
        {/* Photo Type */}
        <div className="flex flex-col items-stretch">
          <PhotoTypeList
            photoType={photoType}
            handlePhotoTypeSelect={handlePhotoTypeSelect}
          />
        </div>

        {/* Occasions */}
        <div className="ml-4 flex flex-col items-stretch">
          <OccasionList
            occasionList={occasionList}
            showDelete={showDelete}
            addOccasionDeleteObject={addOccasionDeleteObject}
            selectedList={selectedList}
            removeOccasionDeleteObject={removeOccasionDeleteObject}
            handleOccasionSelect={handleOccasionSelect}
            downloadJsonFiles={downloadJsonFiles}
            selectNewOccasion={selectNewOccasion}
            selectedListName={selectedListName}
            previousType={previousType}
            showEdit={showEdit}
            handleOccasionInputChange={handleOccasionInputChange}
          />
        </div>

        {/* Photos */}
        <div className="ml-4 flex flex-col items-stretch" id="photo-list">
          {selectedListName.occasion !== "" && (
            <PhotoList
              showDelete={showDelete}
              photosList={photosList}
              handlePhotoSelect={handlePhotoSelect}
              displayAcceptedFiles={displayAcceptedFiles}
              listOfSelectAllOccasion={deleteObject.occasion}
              deleteObject={deleteObject}
              addPhotoDeleteObject={addPhotoDeleteObject}
              deletePhotoDeleteObject={deletePhotoDeleteObject}
            />
          )}
        </div>

        {/* Photo Details */}
        <div className={`${!selectedList.details && "hidden"} ml-4`}>
          <PhotoDetails
            details={details}
            selectedList={selectedList}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            handleDetailInputChange={handleDetailInputChange}
          />
        </div>
      </div>
      {showUploadModule && (
        <div
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              handleUploadModule(false);
            }
          }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black dark:text-black"
        >
          <UploadModule
            handleUploadModule={handleUploadModule}
            listAcceptedFiles={listAcceptedFiles}
            selectedOccasionKey={selectedList.occasion}
            selectedOccasionName={selectedListName.occasion}
            selectedOccasionType={selectedList.type}
            addingMorePhotosToListAcceptedFiles={
              addingMorePhotosToListAcceptedFiles
            }
            downloadJsonFiles={downloadJsonFiles}
            removePhotoFromListAcceptedFiles={removePhotoFromListAcceptedFiles}
          />
        </div>
      )}

      {!saveSuccess && <div></div>}

      {saveSuccess && (
        <div className={`animate-fade-out fixed bottom-0 left-0 m-4 text-2xl`}>
          SUCCESSFULLY SAVED
        </div>
      )}
    </div>
  );
}
