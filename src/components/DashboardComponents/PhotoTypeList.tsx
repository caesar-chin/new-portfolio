import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type PhotoTypeListType = {
  photoType: any;
  handlePhotoTypeSelect: any;
};

export default function PhotoTypeList({
  photoType,
  handlePhotoTypeSelect,
}: PhotoTypeListType) {
  return (
    <div>
      {photoType.map((type, index) => {
        return (
          <div
            key={index}
            className={`${
              type.selected && "text-sea-foam-green dark:text-dark-grayish-red"
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
  );
}
