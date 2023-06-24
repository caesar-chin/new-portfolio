import React from "react";
import { useDropzone } from "react-dropzone";

interface PhotoListProps {
  photosList: any[];
  handlePhotoSelect: (photo_name: string, photo_details: string) => void;
  displayAcceptedFiles: (files: any[]) => void;
}

export default function PhotoList({
  photosList,
  handlePhotoSelect,
  displayAcceptedFiles,
}: PhotoListProps) {
  // const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

  // React.useEffect(() => {
  //   console.log(files);
  // }, [files]);

  return (
    <div
      {...getRootProps()}
      className={`relative ${
        isDragActive && "border-4 border-dotted border-gray-600"
      }`}
    >
      <input {...getInputProps()} />

      <div className={`${isDragActive && "invisible"}`}>
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

      {isDragActive && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          Drop Here To Upload Photos
        </div>
      )}
    </div>
  );
}
