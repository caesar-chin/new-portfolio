import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes as xmark } from "@fortawesome/free-solid-svg-icons";
import * as Dropzone from "react-dropzone";

interface UploadModuleProps {
  handleUploadModule: (show: boolean) => void;
  listAcceptedFiles: any[];
  selectedOccasionKey: string;
  selectedOccasionName: string;
  addingMorePhotosToListAcceptedFiles: (files: any[]) => void;
}

export default function UploadModule({
  handleUploadModule,
  listAcceptedFiles,
  selectedOccasionKey,
  selectedOccasionName,
  addingMorePhotosToListAcceptedFiles,
}: UploadModuleProps) {
  const handleOverlayContentClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    console.log(selectedOccasionKey);
    console.log(selectedOccasionName);
  }, [selectedOccasionKey, selectedOccasionName]);

  const { getRootProps, getInputProps, isDragActive, open } =
    Dropzone.useDropzone({
      noClick: true,
      accept: { "image/*": [] },
      onDropAccepted: (acceptedFiles) => {
        console.log(acceptedFiles);
        addingMorePhotosToListAcceptedFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  return (
    <div
      className="m-auto h-5/6 w-5/6 overflow-y-auto rounded bg-white p-6 dark:bg-gray-200"
      onClick={handleOverlayContentClick}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive && (
        <div className="text-center text-3xl ">Drop Here to Upload </div>
      )}
      {!isDragActive && (
        <div>
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
                      value=""
                      className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                    />
                  </div>

                  <div className="flex w-full flex-row items-center justify-between">
                    <label className="text-md mr-4 block">Artist:</label>
                    <input
                      type="text"
                      id="first_name"
                      className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 flex flex-row items-center">
                  <div className="mr-4">
                    <input
                      type="checkbox"
                      value=""
                      className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                    />
                  </div>

                  <div className="flex w-full flex-row items-center justify-between">
                    <label className="text-md mr-4 block">Venue:</label>
                    <input
                      type="text"
                      id="first_name"
                      className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 flex flex-row items-center">
                  <div className="mr-4">
                    <input
                      type="checkbox"
                      value=""
                      className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                    />
                  </div>

                  <div className="flex w-full flex-row items-center justify-between">
                    <label className="text-md mr-4 block">Caption:</label>
                    <input
                      type="text"
                      id="first_name"
                      className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 flex flex-row items-center">
                  <div className="mr-4">
                    <input
                      type="checkbox"
                      value=""
                      className="border focus:ring-3 text-sea-foarm-green h-4 w-4 rounded  border-gray-300 p-2.5 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                    />
                  </div>

                  <div className="flex w-full flex-row items-center justify-between">
                    <label className="text-md mr-4 block">Date:</label>
                    <input
                      type="text"
                      id="first_name"
                      className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {listAcceptedFiles.map((file, index) => {
              return (
                <div
                  key={file.name}
                  className={`flex flex-row items-center py-8 ${
                    listAcceptedFiles.length > 1 &&
                    "border-b-2  border-sea-foam-green border-opacity-50  dark:border-dark-grayish-red dark:border-opacity-50"
                  }`}
                >
                  <div className="border-2 border-sea-foam-green border-opacity-50 dark:border-dark-grayish-red">
                    <img
                      src={file.preview}
                      // Revoke data uri after image is loaded
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                      }}
                      className="w-80 object-scale-down "
                    />
                  </div>

                  <div className="ml-2">
                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Artist:
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red"
                        placeholder="John"
                        required
                      />
                    </div>

                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Venue:
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red "
                        placeholder="John"
                        required
                      />
                    </div>

                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Caption:
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red "
                        placeholder="John"
                        required
                      />
                    </div>

                    <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
                      <label className="text-md mx-4 block w-full sm:w-auto">
                        Date:
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="border block w-auto rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-sea-foam-green focus:ring-sea-foam-green dark:focus:border-dark-grayish-red dark:focus:ring-dark-grayish-red "
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {listAcceptedFiles.length !== 0 && (
              <div className="mt-4">
                <button
                  disabled={listAcceptedFiles.length === 0}
                  className={`${
                    listAcceptedFiles.length === 0
                      ? "mr-2 text-xl text-gray-500 opacity-50 hover:opacity-75"
                      : "mr-2 cursor-pointer  text-xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                  }`}
                >
                  Upload
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUploadModule(false);
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
      )}
    </div>
  );
}
