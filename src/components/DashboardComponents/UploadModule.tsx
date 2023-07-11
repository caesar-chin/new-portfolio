import { faTimes as xmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as Dropzone from "react-dropzone";

interface UploadModuleProps {
  handleUploadModule: (show: boolean) => void;
  listAcceptedFiles: any[];
  selectedOccasionKey: string;
  selectedOccasionName: string;
  selectedOccasionType: string;
  addingMorePhotosToListAcceptedFiles: (files: any[]) => void;
  downloadJsonFiles?: () => void;
  removePhotoFromListAcceptedFiles: (index: number) => void;
}

type FileData = {
  [key: string]: {
    preview?: string;
    artist: string;
    venue: string;
    caption: string;
    date: string;
  };
};

type CustomFile = File & { preview?: string };

export default function UploadModule({
  handleUploadModule,
  listAcceptedFiles,
  selectedOccasionKey,
  selectedOccasionName,
  selectedOccasionType,
  addingMorePhotosToListAcceptedFiles,
  downloadJsonFiles,
  removePhotoFromListAcceptedFiles,
}: UploadModuleProps) {
  // Add new state variables for the "Apply to all" input values
  const [artist, setArtist] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [date, setDate] = React.useState("");

  // And for the checkboxes
  const [artistCheck, setArtistCheck] = React.useState(false);
  const [venueCheck, setVenueCheck] = React.useState(false);
  const [captionCheck, setCaptionCheck] = React.useState(false);
  const [dateCheck, setDateCheck] = React.useState(false);

  const [inputData, setInputData] = React.useState<any[]>(
    listAcceptedFiles.map((file) => ({
      [file.name]: {
        preview: file.preview,
        artist: "",
        venue: "",
        caption: "",
        date: "",
      },
    }))
  );

  const [uploading, setUploading] = React.useState(false);

  const handleInputChange = (
    fileName: string,
    field: string,
    value: string
  ) => {
    setInputData((prevData: any) => {
      return prevData.map((data: any) => {
        if (Object.keys(data)[0] === fileName) {
          return {
            ...data,
            [fileName]: {
              ...data[fileName],
              [field]: value,
            },
          };
        }
        return data;
      });
    });
  };

  // sends the photos in inputData
  const handleUpload = async () => {
    setUploading(true);
    const formData = new FormData();

    listAcceptedFiles.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    var file_metadata = [];

    if (artistCheck || venueCheck || captionCheck || dateCheck) {
      file_metadata = inputData.map((data) => {
        const fileName = Object.keys(data)[0];
        return {
          [fileName]: {
            artist: artistCheck ? artist : data[fileName].artist,
            venue: venueCheck ? venue : data[fileName].venue,
            caption: captionCheck ? caption : data[fileName].caption,
            date: dateCheck ? date : data[fileName].date,
          },
        };
      });
    }

    // Stringify the file metadata
    formData.append("metadata", JSON.stringify(file_metadata));

    formData.append(
      "occasionObject",
      JSON.stringify({
        selectedOccasionKey: selectedOccasionKey,
        selectedOccasionType: selectedOccasionType,
      })
    );

    await fetch(`${import.meta.env.PUBLIC_API_URL}/upload`, {
      method: "POST",
      credentials: "include",
      headers: {},
      body: formData, // pass the formData object
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === 200) {
          downloadJsonFiles();
          handleUploadModule(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // React.useEffect(() => {
  //   console.log(inputData);
  // }, [inputData]);

  // React.useEffect(() => {
  //   console.log(listAcceptedFiles);
  // }, [listAcceptedFiles]);

  // React.useEffect(() => {
  //   console.log(listAcceptedFiles);
  // }, [listAcceptedFiles]);
  React.useEffect(() => {
    console.log(selectedOccasionKey);
    console.log(selectedOccasionName);
    console.log(selectedOccasionType);
  }, [selectedOccasionKey, selectedOccasionName]);

  const handleRemovePhoto = (index: number) => {
    setInputData((prevArray) => prevArray.filter((item, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive, open } =
    Dropzone.useDropzone({
      noClick: true,
      accept: { "image/*": [] },
      onDropAccepted: (acceptedFiles: CustomFile[]) => {
        console.log(acceptedFiles);

        const uniqueFiles = acceptedFiles.filter(
          (file) =>
            !listAcceptedFiles.some(
              (existingFile) => existingFile.name === file.name
            )
        );

        addingMorePhotosToListAcceptedFiles(
          uniqueFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );

        setInputData((prevData: FileData[]) => {
          const newFileData = uniqueFiles.map((file) => ({
            [file.name]: {
              preview: file.preview,
              artist: "",
              venue: "",
              caption: "",
              date: "",
            },
          }));
          return [...prevData, ...newFileData];
        });
      },
    });

  return (
    <div
      className="relative m-auto h-5/6 w-5/6 overflow-y-auto rounded bg-white p-6 dark:bg-gray-200"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      {isDragActive && (
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-white text-center text-3xl dark:bg-gray-200">
          Drop Here to Upload
        </div>
      )}

      <div id="module" className="relative z-0">
        <div className="mb-2 flex flex-row justify-between">
          <div className="text-xl">{`Uploading to ${selectedOccasionName}`}</div>

          <FontAwesomeIcon
            className="cursor-pointer text-3xl hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
            icon={xmark}
            onClick={(e) => {
              e.stopPropagation();
              handleUploadModule(false);
            }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="w-auto">
            <div>Apply to all</div>
            <div className="mb-2 flex w-min flex-col justify-center">
              <div className="mb-2 flex flex-row items-center">
                <div className="mr-4">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setArtistCheck(e.target.checked);
                    }}
                    className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>

                <div className="flex w-full flex-row items-center justify-between">
                  <label className="text-md mr-4 block">Artist:</label>
                  <input
                    type="text"
                    id="Artist"
                    onChange={(e) => setArtist(e.target.value)}
                    className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>
              </div>

              <div className="mb-2 flex flex-row items-center">
                <div className="mr-4">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setVenueCheck(e.target.checked);
                    }}
                    className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>

                <div className="flex w-full flex-row items-center justify-between">
                  <label className="text-md mr-4 block">Venue:</label>
                  <input
                    type="text"
                    id="Venue"
                    onChange={(e) => setVenue(e.target.value)}
                    className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>
              </div>

              <div className="mb-2 flex flex-row items-center">
                <div className="mr-4">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setCaptionCheck(e.target.checked);
                    }}
                    className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>

                <div className="flex w-full flex-row items-center justify-between">
                  <label className="text-md mr-4 block">Caption:</label>
                  <input
                    type="text"
                    id="Caption"
                    onChange={(e) => setCaption(e.target.value)}
                    className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>
              </div>

              <div className="mb-2 flex flex-row items-center">
                <div className="mr-4">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setDateCheck(e.target.checked);
                    }}
                    className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>

                <div className="flex w-full flex-row items-center justify-between">
                  <label className="text-md mr-4 block">Date:</label>
                  <input
                    type="text"
                    id="Date"
                    onChange={(e) => setDate(e.target.value)}
                    className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  />
                </div>
              </div>
            </div>
          </div>

          {inputData.map((file: { [x: string]: any }, index: any) => {
            console.log(file)
            const file_object = file[Object.keys(file)[0]];
            const file_name = Object.keys(file)[0];
            return (
              <div
                key={file_name}
                className={`flex flex-col py-8 ${
                  inputData.length > 1 &&
                  "border-b-2  border-sea-foam-green border-opacity-50 dark:border-dark-grayish-red dark:border-opacity-50"
                }`}
              >
                <div className="flex flex-row justify-between ">
                  <div className="mb-4 text-xl">{file_name}</div>
                  <div
                    className="mb-4 cursor-pointer text-xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                    onClick={() => {
                      removePhotoFromListAcceptedFiles(index);
                      handleRemovePhoto(index);
                    }}
                  >
                    Remove
                  </div>
                </div>

                <div className={`flex flex-row items-center`}>
                  <div>
                    <div className="border-2 border-sea-foam-green border-opacity-50 dark:border-dark-grayish-red">
                      <img
                        src={file_object["preview"]}
                        // Revoke data uri after image is loaded
                        onLoad={() => {
                          URL.revokeObjectURL(file_object["preview"]);
                        }}
                        className="w-80 object-scale-down"
                      />
                    </div>
                  </div>

                  <div className="ml-2">
                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Artist:
                      </label>
                      <input
                        type="text"
                        id={`Artist-${index}`}
                        disabled={artistCheck}
                        value={file_object["artist"]}
                        onChange={(e) => {
                          handleInputChange(
                            file_name,
                            "artist",
                            e.target.value
                          );
                        }}
                        className={`${
                          artistCheck
                            ? "cursor-not-allowed bg-gray-300 opacity-50"
                            : "bg-gray-50"
                        } border block w-auto rounded-lg border-gray-300 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red`}
                      />
                    </div>

                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Venue:
                      </label>
                      <input
                        type="text"
                        id={`Venue-${index}`}
                        disabled={venueCheck}
                        value={file_object["venue"]}
                        onChange={(e) => {
                          handleInputChange(file_name, "venue", e.target.value);
                        }}
                        className={`${
                          venueCheck
                            ? "cursor-not-allowed bg-gray-300 opacity-50"
                            : "bg-gray-50"
                        } border block w-auto rounded-lg border-gray-300 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red `}
                      />
                    </div>

                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Caption:
                      </label>
                      <input
                        type="text"
                        id={`Caption-${index}`}
                        disabled={captionCheck}
                        value={file_object["caption"]}
                        onChange={(e) => {
                          handleInputChange(
                            file_name,
                            "caption",
                            e.target.value
                          );
                        }}
                        className={`${
                          captionCheck
                            ? "cursor-not-allowed bg-gray-300 opacity-50"
                            : "bg-gray-50"
                        } border block w-auto rounded-lg border-gray-300 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red `}
                      />
                    </div>

                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Date:
                      </label>
                      <input
                        type="text"
                        id={`Date-${index}`}
                        disabled={dateCheck}
                        value={file_object["date"]}
                        onChange={(e) => {
                          handleInputChange(file_name, "date", e.target.value);
                        }}
                        className={`${
                          dateCheck
                            ? "cursor-not-allowed bg-gray-300 opacity-50"
                            : "bg-gray-50"
                        } border block w-auto rounded-lg border-gray-300 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red `}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {listAcceptedFiles.length !== 0 && (
            <div className="mt-4 flex flex-row gap-4">
              {!uploading ? (
                <button
                  disabled={listAcceptedFiles.length === 0}
                  className={`${
                    listAcceptedFiles.length === 0
                      ? "text-xl text-gray-500 opacity-50 hover:opacity-75"
                      : "cursor-pointer text-xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                  }`}
                  onClick={() => {
                    handleUpload();
                  }}
                >
                  Upload
                </button>
              ) : (
                <div className="flex items-center space-x-1 text-xl">
                  <span>Uploading</span>
                  <span className="animate-fastPulse">.</span>
                  <span className="animate-fastPulse">.</span>
                  <span className="animate-fastPulse">.</span>
                </div>
              )}

              <button
                onClick={(e) => {
                  if (!uploading) {
                    e.stopPropagation();
                    handleUploadModule(false);
                  }
                }}
                className="text-xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="my-20 flex flex-col items-center justify-center text-center text-xl">
          <div className="mr-2">Drop Anywhere to Upload or </div>
          <a
            onClick={open}
            className="cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
          >
            Open File Dialog
          </a>
        </div>
      </div>
    </div>
  );
}
