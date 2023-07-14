import React from "react";
import * as Dropzone from "react-dropzone";

interface PhotoListProps {
  photosList: any[];
  handlePhotoSelect: (photo_name: string, photo_details: string) => void;
  displayAcceptedFiles: (files: any[]) => void;
  showDelete?: boolean;
  listOfSelectAllOccasion: any[];
  deleteObject: any;
}

export default function PhotoList({
  photosList,
  handlePhotoSelect,
  displayAcceptedFiles,
  showDelete,
  listOfSelectAllOccasion,
  deleteObject,
}: PhotoListProps) {
  // const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps, isDragActive } = Dropzone.useDropzone({
    noClick: true,
    accept: { "image/*": [] },
    onDropAccepted: (acceptedFiles) => {
      displayAcceptedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div {...getRootProps()} className={`relative ${isDragActive && ""}`}>
      <input {...getInputProps()} />

      <div className={`${isDragActive && "invisible"}`}>
        {photosList.map((photo, index) => {
          var photo_name = Object.keys(photo)[0];
          var photo_details = photo[photo_name];
          var photo_selected = photo["selected"];
          var photo_occasion = photo_details["occasion"];

          return (
            <div className="flex flex-row items-center" key={index}>
              {showDelete && (
                <input
                  type="checkbox"
                  className="border focus:ring-3 text-sea-foarm-green mr-2 h-1 w-1 rounded border-gray-300 p-2 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                  checked={deleteObject["occasion"].some(
                    (item: { hasOwnProperty: (arg0: any) => any }) =>
                      item.hasOwnProperty(photo_occasion)
                  )}
                  onChange={() => {}}
                />
              )}
              <div
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
            </div>
          );
        })}
      </div>

      <div
        onClick={() => displayAcceptedFiles([])}
        className={
          "mb-1 mr-4 flex cursor-pointer flex-row items-center justify-between text-lg hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        }
      >{`+ Add New Photo`}</div>

      {isDragActive && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center">
          Drop Here To Upload Photos
        </div>
      )}
    </div>
  );
}
