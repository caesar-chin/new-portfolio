import { faCheck, faGreaterThan, faX } from "@fortawesome/free-solid-svg-icons";
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
  showEdit: boolean;
  handleOccasionInputChange: any;
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
  showEdit,
  handleOccasionInputChange,
}: OccasionListProps) {
  const [editValues, setEditValues] = React.useState<any>(occasionList);

  React.useEffect(() => {
    if (occasionList.length !== 0) {
      setEditValues(occasionList);
    }
  }, [occasionList]);

  const handleEditValues = (index: number, new_string: string) => {
    // Clone the state to avoid mutating it directly
    let newState = [...editValues];

    // Replace spaces with underscores in the new value
    let sanitizedValue = new_string.replace(/ /g, "_");

    // Construct a new object with the sanitized value as key and value,
    // and the rest of the properties from the original object
    let newObject = {
      [sanitizedValue]: new_string,
      ...Object.fromEntries(
        Object.entries(newState[index]).filter(
          ([key]) => key !== Object.keys(newState[index])[0]
        )
      ),
    };

    // Replace the object at the given index in the state
    newState[index] = newObject;

    // Update the state
    setEditValues(newState);
  };

  React.useEffect(() => {
    // When showEdit is toggled off, reset editValues to match occasionList
    if (!showEdit) {
      setEditValues([...occasionList]);
    }
  }, [showEdit, occasionList]);

  // React.useEffect(() => {
  //   console.log(editValues);
  // }, [editValues]);

  if (!occasionList || occasionList.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      {occasionList.map((occasion, index) => {
        var occasion_obj_key = Object.keys(occasion)[0];
        var occasion_name = occasion[occasion_obj_key];
        var occasion_selected = occasion[Object.keys(occasion)[1]];

        if (editValues[index]) {
          var edit_occasion_obj_key = Object.keys(editValues[index])[0];
          var edit_occasion_name = editValues[index][edit_occasion_obj_key];
        }

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
                        selectedList.type + "/" + occasion_obj_key,
                    });
                  } else if (!event.target.checked) {
                    removeOccasionDeleteObject(index, {
                      [occasion_obj_key]:
                        selectedList.type + "/" + occasion_obj_key,
                    });
                  }
                }}
                checked={occasion["deleted_selected"]}
              />
            )}

            <div className={`mb-1 flex flex-row items-center justify-between`}>
              {!showEdit ? (
                <div
                  onClick={() => {
                    handleOccasionSelect(occasion_obj_key, occasion_name);
                  }}
                  className={`${
                    occasion_selected &&
                    "text-sea-foam-green dark:text-dark-grayish-red"
                  } mr-4 cursor-pointer text-lg hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
                >
                  {occasion_name}
                </div>
              ) : (
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="border mb-1 border-gray-500 bg-transparent text-lg"
                    type="text"
                    value={edit_occasion_name}
                    onChange={(event) =>
                      handleEditValues(index, event.target.value)
                    }
                  />

                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-md mr-4 cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
                    onClick={() => {
                      handleOccasionInputChange(
                        occasion_obj_key,
                        editValues[index]
                      );
                    }}
                  />
                </div>
              )}

              <div className="w-4">
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className={`${!occasion_selected && "hidden"} ${
                    occasion_selected &&
                    "text-sea-foam-green dark:text-dark-grayish-red"
                  } text-sm hover:text-sea-foam-green dark:hover:text-dark-grayish-red`}
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
