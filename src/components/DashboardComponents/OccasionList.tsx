import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AddingNewListItem from "./AddingNewListItem";

interface OccasionListProps {
  occasionList: any[];
  showDelete?: boolean;
  addOccasionDeleteObject: any;
  selectedList: any;
  removeOccasionDeleteObject: any;
  handleOccasionSelect: any;
  downloadJsonFiles: any;
  selectNewOccasion: any;
  selectedListName: any;
  previousType: any;
}

export default function OccasionList({
  occasionList,
  showDelete,
  addOccasionDeleteObject,
  selectedList,
  removeOccasionDeleteObject,
  handleOccasionSelect,
  downloadJsonFiles,
  selectNewOccasion,
  selectedListName,
  previousType,
}: OccasionListProps) {
  return (
    <div>
      {occasionList.map((occasion, index) => {
        var occasion_obj_key = Object.keys(occasion)[0];
        var occasion_name = occasion[occasion_obj_key];
        var occasion_selected = occasion[Object.keys(occasion)[1]];
        return (
          <div className="flex flex-row items-center" key={index}>
            {showDelete && (
              <input
                type="checkbox"
                className="border focus:ring-3 text-sea-foarm-green mr-2 h-1 w-1 rounded border-gray-300 p-2 text-sm focus:border-sea-foam-green focus:bg-sea-foam-green focus:ring-sea-foam-green dark:text-dark-grayish-red dark:focus:border-dark-grayish-red dark:focus:bg-dark-grayish-red dark:focus:ring-dark-grayish-red"
                onChange={(event) => {
                  if (event.target.checked) {
                    addOccasionDeleteObject(index, {
                      [occasion_obj_key]:
                        selectedList.type + "/" + occasion_name,
                    });
                  } else if (!event.target.checked) {
                    removeOccasionDeleteObject(index, {
                      [occasion_obj_key]:
                        selectedList.type + "/" + occasion_name,
                    });
                  }
                }}
                checked={occasion["deleted_selected"]}
              />
            )}

            <div
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
          </div>
        );
      })}

      {occasionList.length > 0 && selectedListName.type === previousType && (
        <AddingNewListItem
          typeName={selectedList.type}
          occasionBool={true}
          downloadJsonFiles={downloadJsonFiles}
          selectNewOccasion={selectNewOccasion}
        />
      )}
    </div>
  );
}
