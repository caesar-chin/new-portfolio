import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

interface AddingNewListItemProps {
  typeName: any;
  occasionBool: boolean;
  occasionName?: string;
  downloadJsonFiles?: () => void;
  selectNewOccasion?: (occasion_name: string, occasion_obj_key: string) => void;
}

export default function AddingNewListItem({
  typeName,
  occasionBool,
  occasionName,
  downloadJsonFiles,
  selectNewOccasion,
}: AddingNewListItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [addingNew, setAddingNew] = useState(false);

  const handleAdding = (bool: boolean | ((prevState: boolean) => boolean)) => {
    setAddingNew(bool);
  };

  const handleSubmitNewItem = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (occasionBool) {
      await fetch(`${import.meta.env.PUBLIC_API_URL}/add_occasion`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: typeName.toLowerCase(),
          occasion: inputRef.current?.value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status >= 400) {
            console.log("Error adding new occasion");
          } else {
            console.log(res);
            selectNewOccasion(res.occasion_name, res.occasion_key);
            console.log("Successfully added new occasion");
            downloadJsonFiles();
            handleAdding(false);
          }
        });
    }
  };

  // This effect runs after the component has updated. If addingNew is true,
  // it will focus the input.
  useEffect(() => {
    if (addingNew && inputRef.current) {
      inputRef.current.focus();
    }
  }, [addingNew]);

  return (
    <div>
      {addingNew && (
        <div>
          <form onSubmit={handleSubmitNewItem}>
            <input
              className="border mb-1 mr-2 border-gray-500 bg-transparent text-lg"
              ref={inputRef}
              type="text"
              placeholder={`New ${occasionBool ? "Occaison" : "Photo"}`}
            />
            <button type="submit">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-md mr-2 cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
              />
            </button>

            <FontAwesomeIcon
              icon={faX}
              onClick={() => handleAdding(false)}
              className="text-md cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
            />
          </form>
        </div>
      )}
      <div
        onClick={() => handleAdding(true)}
        className={
          "mb-1 mr-4 flex cursor-pointer flex-row items-center justify-between text-lg hover:text-sea-foam-green dark:hover:text-dark-grayish-red"
        }
      >{`+ Add New `}</div>
    </div>
  );
}
