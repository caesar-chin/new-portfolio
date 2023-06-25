import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes as xmark } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
        <div className="text-center text-3xl ">Drop Here To Upload Photos</div>
      )}

      {!isDragActive && (
        <div>
          <div className="mb-2 flex flex-row justify-between">
            <div className="text-xl">{`Uploading to ${selectedOccasionName}`}</div>

            <FontAwesomeIcon
              className="cursor-pointer text-3xl hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red"
              icon={xmark}
              onClick={() => handleUploadModule(false)}
            />
          </div>

          <div className="flex flex-col">
            {listAcceptedFiles.map((file, index) => {
              return (
                <div key={file.name} className="my-4">
                  <div>
                    <img
                      src={file.preview}
                      // Revoke data uri after image is loaded
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                      }}
                      className="w-80 object-scale-down"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
